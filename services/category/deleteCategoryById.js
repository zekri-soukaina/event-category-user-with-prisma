import categoriesData from "../../data/categories.json" assert { type: "json" };
import NotFoundError from "../../errors/NotFoundError.js";

const deleteCategoryById = (id) => {
  const index = categoriesData.categories.findIndex(
    (category) => category.id === id
  );
  if (!index) {
    throw new NotFoundError("category", id);
  }
  categoriesData.categories.splice(index, 1);
  return id;
};

export default deleteCategoryById;
