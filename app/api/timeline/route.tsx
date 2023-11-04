import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { TimeNode } from '@prisma/client';
import { getTimeNode } from '@/helpers/apis';

export const GET = async (req: NextRequest) => {
  try {
    const query = req.nextUrl.searchParams;
    const timeNodeId = query.get('id');

    if (!timeNodeId) {
      return NextResponse.json(
        { isError: true, message: 'No time node id received.' },
        { status: 400 },
      );
    }

    const timeNode = await getTimeNode(timeNodeId);

    if (!timeNode) {
      return NextResponse.json(
        { isError: true, message: 'Time node not found.' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      isError: false,
      message: 'Get time node successfully.',
      data: timeNode,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { isError: true, message: 'Some errors happened.' },
      { status: 500 },
    );
  }
};

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

export const PUT = async (req: NextRequest) => {
  try {
    const data: Partial<TimeNode> = await req.json();
    if (!data) {
      return NextResponse.json(
        { isError: true, message: 'No data received.' },
        { status: 400 },
      );
    }

    const { id, date, time, title, note, type, userId } = data;

    const timeNode = await prisma.timeNode.update({
      where: {
        id,
      },
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
          message: 'Some errors happened when updating time node.',
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      isError: false,
      message: 'Update time node successfully.',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { isError: true, message: 'Some errors happened.' },
      { status: 500 },
    );
  }
};
