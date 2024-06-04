import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

const createEvent = async (
  createdBy,
  title,
  description,
  image,
  categoryIds,
  location,
  startTime,
  endTime
) => {
  const existingEvent = await prisma.event.findFirst({
    where: {
      title,
      description,
    },
  });
  if (existingEvent) {
    return existingEvent;
  }
  return prisma.event.create({
    data: {
      id: new ObjectId().toHexString(),
      createdBy,
      title,
      description,
      image,
      categoryIds,
      location,
      startTime,
      endTime,
    },
  });
};

export default createEvent;
