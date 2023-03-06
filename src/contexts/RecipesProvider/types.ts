export type RequestStatus = 'RECIPES_LOADING' | 'RECIPES_SUCCESS';

export const RECIPES_LOADING = 'RECIPES_LOADING';
export const RECIPES_SUCCESS = 'RECIPES_SUCCESS';

export type Recipe = {
  title: string;
};

export type RecipesProps = { recipes: Recipe[]; requestStatus: RequestStatus };
