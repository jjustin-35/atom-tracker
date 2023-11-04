import prisma from "@/lib/prisma";
import { TimeNodeType } from "@/constants/types/api";

export const getTimeline = async (
    userId: TimeNodeType['userId'],
    date: TimeNodeType['date'],
  ) => {
    try {
      const data = await prisma.timeNode.findMany({
        where: {
          userId,
          date,
        },
        orderBy: {
          time: 'desc',
        },
      });
  
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  
  export const getTimeNode = async (id: TimeNodeType['id']) => {
    try {
      const data = await prisma.timeNode.findUnique({
        where: {
          id,
        },
      });
      if (!data) return null;
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };