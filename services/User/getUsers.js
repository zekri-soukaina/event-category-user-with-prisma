import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async () => {
  return prisma.user.findMany({
    where: {
      id,
    },
  });
};
export default getUsers;
