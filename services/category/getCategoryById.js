import NotFoundError from "../../errors/NotFoundError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCategoryById = async (id) => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  if (!category) {
    throw new NotFoundError("category", id);
  }
  return category;
};

export default getCategoryById;
