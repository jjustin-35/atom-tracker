import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password, name, avatar } = req.body;
  const user = await prisma.user.create({
    data: {
      email,
      password,
      name,
      avatar,
    },
  });
  res.status(200).json(user);
};
