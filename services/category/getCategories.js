import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getCategories = async () => {
  return prisma.category.findMany({
    where: {
      id,
    },
  });
};

export default getCategories;
