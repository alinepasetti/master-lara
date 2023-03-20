import {
  Recipe,
  RecipesProps,
  RequestStatus,
} from '../contexts/RecipesProvider/types';
import { vi } from 'vitest';

export const buildRecipesProviderValueMock = (
  recipes: Recipe[] = [],
  requestStatus = RequestStatus.RECIPES_SUCCESS,
): RecipesProps => {
  return {
    recipes,
    requestStatus,
    searchedIngredients: [],
    getRecipes: vi.fn(),
  };
};

export const RECIPE_MOCK_DATA = {
  id: 'id',
  label: 'Sweet Sugar',
  image: 'image.jpg',
  ingredientLines: ['sugar'],
  cuisineType: 'Indian',
  totalTime: 60,
  ingredientRatio: 30,
  url: 'url.com',
};
