import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import encryptPassword from '@/helpers/password';

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { email, password, name, avatar } = data;
    const hash = await encryptPassword(password);

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

    const redirectUrl = new URL('/auth/signin', req.url);

    return NextResponse.redirect(redirectUrl);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { isError: true, message: 'Some errors happened.' },
      { status: 500 },
    );
  }
};
