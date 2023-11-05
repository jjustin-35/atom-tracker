import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams;
  const email = query.get('email');

  try {
    const data = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        avatar: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!data) {
      return NextResponse.json(
        { isError: true, message: 'User not found.' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      isError: false,
      message: 'Get user data successfully.',
      data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { isError: true, message: 'Some errors happened.' },
      { status: 500 },
    );
  }
};
