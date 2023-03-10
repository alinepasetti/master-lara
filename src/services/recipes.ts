import {
  RawRecipe,
  Recipe,
  RecipeResponse,
} from 'contexts/RecipesProvider/types';
import { capitalizeFirstLetter, generateId } from './utils';
import {
  ActiveRecipe,
  IngredientLinesChecked,
} from 'contexts/ActiveRecipe/types';

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

export const hasIngredientCheck = (
  ingredientLines: Recipe['ingredientLines'],
  searchedIngredients: string[],
): IngredientLinesChecked[] => {
  return ingredientLines
    .map((ingredient) => ({
      ingredient,
      hasIngredient: compareIngredients(searchedIngredients, ingredient),
    }))
    .sort((a) => (a.hasIngredient ? -1 : 1));
};

export const compareIngredients = (
  searchedIngredients: string[],
  ingredient: string,
): boolean => {
  return !!searchedIngredients.find((searchedIngredient) => {
    return ingredient.toLowerCase().includes(searchedIngredient.toLowerCase());
  });
};

export const buildMessage = (
  recipeLabel: ActiveRecipe['label'],
  ingredientLines: IngredientLinesChecked[],
): string => {
  const missingIngredients = ingredientLines
    .filter((ingredient) => !ingredient.hasIngredient)
    .map((ingredient) => ingredient.ingredient)
    .join(', ');
  return `Come and cook ${recipeLabel} with me. Just bring: ${missingIngredients}. xoxo`;
};
