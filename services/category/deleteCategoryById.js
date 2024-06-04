import NotFoundError from "../../errors/NotFoundError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteCategoryById = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw new NotFoundError("category", id);
  }
  try {
    const deleteCategory = await prisma.category.delete({
      where: {
        id,
      },
    });
    if (!deleteCategory) {
      throw new NotFoundError("category", id);
    }
    return deleteCategory.id;
  } catch (error) {
    console.error(error);
  }
};

export default deleteCategoryById;
