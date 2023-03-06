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
      cuisineType: rawRecipe.recipe.cuisineType,
    };
  });
};

export const parseRecipeResponse = (
  response: RecipeResponse,
): { searchedIngredients: string; recipes: Recipe[] } => {
  return {
    searchedIngredients: response.q,
    recipes: mapRecipes(response.hits),
  };
};
