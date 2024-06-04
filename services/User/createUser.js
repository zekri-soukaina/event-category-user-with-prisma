import usersData from "../../data/users.json" assert { type: "json" };

import { v4 as uuid } from "uuid";

const createUser = (username, password, name, image) => {
  const newUser = {
    id: uuid(),
    username,
    password,
    name,
    image,
  };
  usersData.users.push(newUser);
  return newUser;
};

export default createUser;
