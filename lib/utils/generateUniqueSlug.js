import prisma from '@/lib/prisma';
import { slugify } from './slugify';

export async function generateUniqueSlug (title, model = 'experience') {
    const baseSlug = slugify(title);
    let slug = baseSlug;
    let counter = 1;

    while (true) {
        const exists = await prisma[model].findUnique({ where: { slug } });
        if (!exists) break;

        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    return slug;
}