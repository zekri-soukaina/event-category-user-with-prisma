import express from "express";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import getUsers from "../services/User/getUsers.js";
import getUserById from "../services/User/getUserById.js";
import createUser from "../services/User/createUser.js";
import updateUserById from "../services/User/updateUserById.js";
import deleteUserById from "../services/User/deleteUserById.js";

import authMiddleware from "../middleware/advancedAuth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while getting list of users");
  }
});

router.get(
  "/:id",
  async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).json(user);
  },
  notFoundErrorHandler
);

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { username, password, name, image } = req.body;
    const newUser = await createUser(username, password, name, image);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong while creating a user");
  }
});

router.put(
  "/:id",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { username, password, name, image } = req.body;
      const updatedUser = await updateUserById(
        id,
        username,
        password,
        name,
        image
      );
      // res.status(200).json(updatedUser);
      res.status(200).send({
        message: `User with id ${id} successfully updated`,
        updatedUser,
      });
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedUserId = await deleteUserById(id);
      res.status(200).json({
        message: `user with the id ${deletedUserId} successfully deleted.`,
      });
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

export default router;
