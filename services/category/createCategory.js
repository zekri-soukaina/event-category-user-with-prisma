import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

const createCategory = async (name) => {
  const existingCategory = await prisma.category.findFirst({
    where: {
      name,
    },
  });
  if (existingCategory) {
    return existingCategory;
  }
  return prisma.category.create({
    data: {
      id: new ObjectId().toHexString(),
      name,
    },
  });
};

export default createCategory;
