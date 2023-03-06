import { data } from 'contexts/RecipesProvider/mockData';
import {
  RequestStatus,
  RECIPES_LOADING,
  RECIPES_SUCCESS,
  Recipe,
} from 'contexts/RecipesProvider/types';
import { useEffect, useState } from 'react';
import { parseRecipeResponse } from 'services/utils';

export type RecipesProps = {
  recipe: Recipe | null;
  requestStatus: RequestStatus;
};

const useRecipes = () => {
  const [requestStatus, setRequestStatus] =
    useState<RequestStatus>(RECIPES_LOADING);
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    async function asyncDelay() {
      await delay(2000);
      setRecipes(parseRecipeResponse(data).recipes);
      setRequestStatus(RECIPES_SUCCESS);
    }
    asyncDelay();
  }, []);

  return { requestStatus, recipes };
};

export default useRecipes;
