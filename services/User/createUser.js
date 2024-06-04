import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();
const createUser = async (username, password, name, image) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      username: user.username,
    },
  });
  if (!existingUser) {
    return existingUser;
  }
  return prisma.user.create({
    date: {
      id: new ObjectId().toHexString(),
      username,
      password,
      name,
      image,
    },
  });
};

export default createUser;
