import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../errors/NotFoundError.js";

const prisma = new PrismaClient();

const updateCategoryById = async (id, name) => {
  const updateCategory = await prisma.category.updateMany({
    where: {
      id,
    },
    data: {
      name,
    },
  });
  if (!category) {
    throw new NotFoundError("category", id);
  }

  return { message: `Category with ${id} was updates.` };
};
export default updateCategoryById;
