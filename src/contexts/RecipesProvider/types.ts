export enum RequestStatus {
  RECIPES_LOADING = 'RECIPES_LOADING',
  RECIPES_SUCCESS = 'RECIPES_SUCCESS',
}

export type Recipe = {
  id: string;
  label: string;
  image: string;
  url: string;
  ingredientLines: string[];
  totalTime: number;
  cuisineType: string;
};

export type RawRecipe = {
  recipe: {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: object[];
    calories: number;
    totalWeight: number;
    totalTime: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    totalNutrients: object;
    totalDaily: object;
    digest: object[];
  };
};

export type RecipeResponse = {
  q: string;
  from: number;
  to: number;
  more: boolean;
  count: number;
  hits: RawRecipe[];
};

export type RecipesProps = {
  recipes: Recipe[];
  searchedIngredients: string[];
  requestStatus: RequestStatus;
};
