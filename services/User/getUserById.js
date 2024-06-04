import NotFoundError from "../../errors/NotFoundError.js";

import usersData from "../../data/users.json" assert { type: "json" };

const getUserById = (id) => {
  const user = usersData.users.find((user) => user.id === id);
  if (!user) {
    throw new NotFoundError("user", id);
  }
  return user;
};

export default getUserById;
