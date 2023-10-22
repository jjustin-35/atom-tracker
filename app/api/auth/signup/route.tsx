import { NextRequest, NextResponse } from 'next/server';

import { User } from '@prisma/client';

import prisma from '@/lib/prisma';
import encryptPassword from '@/helpers/password';

export const POST = async (req: NextRequest) => {
  try {
    const data: Partial<User> = await req.json();
    const { email, password, name, avatar } = data;
    const hash = await encryptPassword(password);

    const existedUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existedUser) {
      return NextResponse.json(
        { isError: true, message: 'User already existed.' },
        { status: 400 },
      );
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: hash,
        name,
        avatar,
      },
    });

    if (!user) {
      return NextResponse.json(
        { isError: true, message: 'Some errors happened when creating user.' },
        { status: 500 },
      );
    }

    return NextResponse.json({
      isError: false,
      message: 'Sign up successfully.',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { isError: true, message: 'Some errors happened.' },
      { status: 500 },
    );
  }
};
