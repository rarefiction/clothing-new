import { createSelector } from "reselect";

import { Rootstate } from "../store";

import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCagetoryReducer = (state: Rootstate): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCagetoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCagetoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
