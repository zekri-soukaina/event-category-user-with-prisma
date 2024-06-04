import express from "express";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import getCategories from "../services/category/getCategories.js";
import getCategoryById from "../services/category/getCategoryById.js";
import createCategory from "../services/category/createCategory.js";
import updateCategoryById from "../services/category/updateCategoryById.js";
import deleteCategoryById from "../services/category/deleteCategoryById.js";

import authMiddleware from "../middleware/advancedAuth.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const categories = getCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send("semthing went wrong while gettting categories.");
  }
});

router.post("/", authMiddleware, (req, res) => {
  try {
    const { name } = req.body;
    const category = createCategory(name);
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).send("semthing went wrong while creating category.");
  }
});

router.get(
  "/:id",
  (req, res) => {
    const { id } = req.params;
    const categoryById = getCategoryById(id);
    res.status(200).json(categoryById);
  },
  notFoundErrorHandler
);

router.put(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updateCategoy = updateCategoryById(id, name);
    // res.status(200).json(updateCategoy);
    res.status(200).send({
      message: `Category with id ${id} successfully updated`,
      updateCategoy,
    });
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  (req, res) => {
    const { id } = req.params;
    const deleteCategory = deleteCategoryById(id);
    // res.status(200).json({
    //   message: `category with id ${deleteCategory}  successfully deleted.`,
    // });
    res.status(200).send({
      message: `Category with id ${id} successfully deleted`,
      deleteCategory,
    });
  },
  notFoundErrorHandler
);

export default router;
