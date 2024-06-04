import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getEvents = async (title, location) => {
  return prisma.event.findMany({
    where: {
      title,
      location,
    },
  });
};
export default getEvents;
