import NotFoundError from "../../errors/NotFoundError.js";
import { PrismaClient } from "@prisma/client";

import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

const deleteEventById = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw new NotFoundError("event", id);
  }

  try {
    const deleteEvent = await prisma.event.deleteMany({
      where: {
        id,
      },
    });
    if (!deleteEvent) {
      throw new NotFoundError("event", id);
    }
    return deleteEvent.id;
  } catch (error) {
    console.error(error);
  }
};

export default deleteEventById;
