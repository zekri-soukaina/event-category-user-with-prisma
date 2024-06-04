import NotFoundError from "../../errors/NotFoundError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getEventById = async (id) => {
  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });
  if (!event) {
    throw new NotFoundError("event", id);
  }
  return event;
};

export default getEventById;
