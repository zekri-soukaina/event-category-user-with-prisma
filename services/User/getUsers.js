import usersData from "../../data/users.json" assert { type: "json" };

const getUsers = () => {
  let users = usersData.users;
  return users;
};
export default getUsers;
