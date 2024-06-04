import NotFoundError from "../../errors/NotFoundError.js";
import { PrismaClient } from "@prisma/client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

const deleteUserById = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw new NotFoundError("user", id);
  }
  try {
    const deleteUser = await prisma.user.deleteMany({
      where: { id },
    });
    if (!deleteUser) {
      throw new NotFoundError("user", id);
    }
    return deleteUser.id;
  } catch (error) {
    console.error(error);
  }
};

export default deleteUserById;
