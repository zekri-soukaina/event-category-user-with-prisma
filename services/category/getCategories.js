import categoriesData from "../../data/categories.json" assert { type: "json" };

const getCategories = () => {
  let categories = categoriesData.categories;
  return categories;
};

export default getCategories;
