import { hash } from 'bcrypt';
import prisma from '@/lib/prisma';

export async function POST (req) {
    const { email, password, name } = await req.json();

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return Response.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        },
    });

    return Response.json({ success: true, user: { email: user.email, id: user.id } });
}
