import categoriesData from "../../data/categories.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const getCategoryById = (id) => {
  const category = categoriesData.categories.find(
    (category) => category.id === id
  );
  if (!category) {
    throw new NotFoundError("category", id);
  }
  return category;
};

export default getCategoryById;
