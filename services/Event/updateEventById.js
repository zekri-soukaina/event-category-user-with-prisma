import NotFoundError from "../../errors/NotFoundError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateEventById = async (id, updatedEvent) => {
  const {
    title,
    description,
    location,
    image,
    startTime,
    endTime,
    createdBy,
    categoryIds,
  } = updatedEvent;
  const updateEvent = await prisma.event.updateMany({
    where: {
      id,
    },
    data: {
      title,
      description,
      location,
      image,
      startTime,
      endTime,
      createdBy,
      categoryIds,
    },
  });
  if (!updateEvent) {
    throw new NotFoundError("event", id);
  }

  return { message: `Event with ${id} was updated.` };
};

export default updateEventById;
