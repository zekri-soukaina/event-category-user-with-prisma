import NotFoundError from "../../errors/NotFoundError.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateUserById = async (id, username, password, name, image) => {
  const updateUser = await prisma.user.updateMany({
    where: {
      id,
    },
    data: {
      username,
      password,
      name,
      image,
    },
  });
  if (!updateUser) {
    throw new NotFoundError("user", id);
  }

  return { message: `User with ${id} was updated.` };
};

export default updateUserById;
