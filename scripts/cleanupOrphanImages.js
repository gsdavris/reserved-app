import prisma from '../lib/prisma.js';
import { deleteFromS3 } from '../lib/s3.js';

async function cleanupOrphanImages () {
    const ONE_HOUR_AGO = new Date(Date.now() - 1000 * 60 * 60); // 1 ώρα πριν

    const orphanImages = await prisma.image.findMany({
        where: {
            featuredIn: { none: {} },
            experience: null,
            // createdAt: {
            //     lt: ONE_HOUR_AGO,
            // },
        },
    });

    console.log(`➡️ Βρέθηκαν ${orphanImages.length} ορφανές εικόνες`);

    for (const image of orphanImages) {
        try {
            await deleteFromS3(image.url);

            await prisma.image.delete({
                where: { id: image.id },
            });

            console.log(`✅ Deleted image ID ${image.id} (${image.url})`);
        } catch (err) {
            console.error(`❌ Failed to delete image ID ${image.id}`, err);
        }
    }

    console.log('🚿 Cleanup ολοκληρώθηκε!');
}

cleanupOrphanImages()
    .catch((err) => {
        console.error('🔥 Cleanup script failed:', err);
        process.exit(1);
    })
    .finally(() => process.exit(0));
