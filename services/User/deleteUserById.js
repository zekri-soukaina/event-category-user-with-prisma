import NotFoundError from "../../errors/NotFoundError.js";
import usersData from "../../data/users.json" assert { type: "json" };

const deleteUserById = (id) => {
  const index = usersData.users.findIndex((user) => user.id === id);

  if (index === -1) {
    throw new NotFoundError("user", id);
  }
  usersData.users.splice(index, 1);
  return id;
};

export default deleteUserById;
