import { User, TimeNode } from '@prisma/client';

export type ApiResponse<T = any> = {
  isError: boolean;
  message: string;
  data?: T;
};

export type UserType = Partial<User>;

export type TimeNodeType = Partial<TimeNode>;
