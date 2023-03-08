import {
  RawRecipe,
  Recipe,
  RecipeResponse,
} from 'contexts/RecipesProvider/types';
import { capitalizeFirstLetter, generateId } from './utils';

export const mapRecipes = (
  rawRecipes: RawRecipe[],
  searchedIngredients: string[],
): Recipe[] => {
  return rawRecipes.map((rawRecipe) => {
    return {
      id: generateId(rawRecipe.recipe.uri),
      label: rawRecipe.recipe.label,
      image: rawRecipe.recipe.image,
      url: rawRecipe.recipe.url,
      ingredientLines: rawRecipe.recipe.ingredientLines,
      totalTime: rawRecipe.recipe.totalTime,
      cuisineType: capitalizeFirstLetter(rawRecipe.recipe.cuisineType[0]),
      ingredientRatio:
        searchedIngredients.length +
        '/' +
        rawRecipe.recipe.ingredientLines.length,
    };
  });
};

export const parseRecipeResponse = (
  response: RecipeResponse,
): { searchedIngredients: string[]; recipes: Recipe[] } => {
  const searchedIngredients = response.q.split(', ');
  return {
    searchedIngredients,
    recipes: mapRecipes(response.hits, searchedIngredients),
  };
};
