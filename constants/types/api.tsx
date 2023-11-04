import { TimeNode } from '@prisma/client';

export type UserType = {
  email: string;
  password: string;
  name: string;
  avatar: string;
};

export type TimeNodeType = Partial<TimeNode>;
