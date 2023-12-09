import { NextRequest, NextResponse } from 'next/server';
import { getTimeline } from '@/apis/timeline';

export const GET = async (req: NextRequest) => {
  try {
    const query = req.nextUrl.searchParams;
    const userId = query.get('userId');
    const date = query.get('date');

    if (!userId || !date) {
      const message = !userId ? 'No user id received.' : 'No date received.';
      return NextResponse.json({ isError: true, message }, { status: 400 });
    }

    const data = await getTimeline(userId, date);

    return NextResponse.json({
      isError: false,
      message: 'Get timeline successfully.',
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
