import {
  RawRecipe,
  Recipe,
  RecipeResponse,
} from 'contexts/RecipesProvider/types';

export const mapRecipes = (rawRecipes: RawRecipe[]): Recipe[] => {
  return rawRecipes.map((rawRecipe) => {
    return {
      label: rawRecipe.recipe.label,
      image: rawRecipe.recipe.image,
      url: rawRecipe.recipe.url,
      ingredientLines: rawRecipe.recipe.ingredientLines,
      totalTime: rawRecipe.recipe.totalTime,
      cuisineType: capitalizeFirstLetter(rawRecipe.recipe.cuisineType[0]),
    };
  });
};

export const parseRecipeResponse = (
  response: RecipeResponse,
): { searchedIngredients: string[]; recipes: Recipe[] } => {
  return {
    searchedIngredients: response.q.split(', '),
    recipes: mapRecipes(response.hits),
  };
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const secondsToMinutes = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return hours > 1
    ? hours + ' hours and ' + minutes + ' minutes'
    : hours === 1
    ? hours + ' hour and ' + minutes + ' minutes'
    : minutes + ' minutes';
};
