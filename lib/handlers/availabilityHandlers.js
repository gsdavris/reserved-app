import prisma from '@/lib/prisma';
import { validateAvailability } from '@/lib/validators/availability';
import { buildAvailabilityData } from '@/lib/utils/availability';

async function ensureExperienceExists (experienceId) {
    const found = await prisma.experience.findUnique({
        where: { id: Number(experienceId) },
        select: { id: true },
    });
    if (!found) throw new Error('Experience not found');
}

export async function getExperienceAvailability (experienceId) {
    if (!experienceId || isNaN(Number(experienceId))) {
        throw new Error('Invalid experienceId');
    }
    return prisma.experienceAvailability.findUnique({
        where: { experienceId: Number(experienceId) },
    });
}

export async function upsertExperienceAvailability (experienceId, payload) {
    if (!experienceId || isNaN(Number(experienceId))) {
        throw new Error('Invalid experienceId');
    }

    await ensureExperienceExists(experienceId);

    const errors = validateAvailability(payload);
    if (errors.length) {
        const err = new Error(`Availability validation failed:\n- ${errors.join('\n- ')}`);
        err.status = 400;
        err.details = errors;
        throw err;
    }

    const data = buildAvailabilityData(payload);

    return prisma.experienceAvailability.upsert({
        where: { experienceId: Number(experienceId) },
        create: { experienceId: Number(experienceId), ...data },
        update: { ...data },
    });
}

export async function deleteExperienceAvailability (experienceId) {
    if (!experienceId || isNaN(Number(experienceId))) {
        throw new Error('Invalid experienceId');
    }

    const existing = await prisma.experienceAvailability.findUnique({
        where: { experienceId: Number(experienceId) },
        select: { id: true },
    });

    if (!existing) return { deleted: false };

    await prisma.experienceAvailability.delete({
        where: { experienceId: Number(experienceId) },
    });

    return { deleted: true };
}