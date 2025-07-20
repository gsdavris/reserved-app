import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';
import probe from 'probe-image-size';

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const BUCKET_NAME = process.env.S3_BUCKET_NAME;

export async function uploadToS3 (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileExt = file.name.split('.').pop();
    const key = `uploads/${randomUUID()}.${fileExt}`;

    const uploadParams = {
        Bucket: BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: file.type,
    };

    await s3.send(new PutObjectCommand(uploadParams));

    const url = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    // Get width/height
    let width = null;
    let height = null;
    try {
        const result = probe.sync(buffer);
        width = result.width;
        height = result.height;
    } catch (err) {
        console.warn('Could not detect image size:', err);
    }

    return { url, key, width, height };
}

export async function deleteFromS3 (fileUrl) {
    const key = new URL(fileUrl).pathname.slice(1); // π.χ. /images/abc.jpg → images/abc.jpg

    const command = new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
    });

    await s3.send(command);
}
