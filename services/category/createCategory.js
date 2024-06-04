import categoriesData from "../../data/categories.json" assert { type: "json" };
import { v4 as uuidv4 } from "uuid";

const createCategory = (name) => {
  const newCategory = {
    id: uuidv4(),
    name,
  };
  categoriesData.categories.push(newCategory);
  return newCategory;
};

export default createCategory;
