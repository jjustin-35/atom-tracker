import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { TimeNode } from '@prisma/client';

export const POST = async (req: NextRequest) => {
  try {
    const data: Partial<TimeNode> = await req.json();
    if (!data) {
      return NextResponse.json(
        { isError: true, message: 'No data received.' },
        { status: 400 },
      );
    }

    const { date, time, title, note, type, userId } = data;

    const timeNode = await prisma.timeNode.create({
      data: {
        date,
        time,
        title,
        note,
        type,
        userId,
      },
    });

    if (!timeNode) {
      return NextResponse.json(
        {
          isError: true,
          message: 'Some errors happened when creating time node.',
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      isError: false,
      message: 'Create time node successfully.',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { isError: true, message: 'Some errors happened.' },
      { status: 500 },
    );
  }
};
