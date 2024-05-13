import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth, currentUser } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function GET() {
  const { userId } = auth();
  console.log(userId)
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  // Get user's information
  const user = await currentUser();
  if (!user) {
    return new NextResponse('User not exist', { status: 404 });
  }

  let dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        name: user.firstName ?? '',
        image: user.imageUrl ?? '',
        email: user.emailAddresses[0].emailAddress ?? '', 
      },
    });
  }

  return new NextResponse(null, {
    status: 302, // 302 Found - temporary redirect
    headers: {
      Location: '/notes',
    },
  });

}