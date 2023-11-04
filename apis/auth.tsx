import prisma from '@/lib/prisma';
import { isEmptyObj } from '@/helpers/object';

export const getUser = async (email: string) => {
  try {
    const data = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!data || isEmptyObj(data)) return null;
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
