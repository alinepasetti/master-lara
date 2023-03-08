import { Recipe } from 'contexts/RecipesProvider/types';

export type IngredientLinesChecked = {
  ingredient: string;
  hasIngredient: boolean;
};

export type ActiveRecipe = Omit<Recipe, 'ingredientLines'> & {
  ingredientLines: IngredientLinesChecked[];
};

export type ActiveRecipeProps = {
  activeRecipe: ActiveRecipe;
};
