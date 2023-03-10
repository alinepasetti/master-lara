import { data } from 'contexts/RecipesProvider/mockData';
import { RequestStatus, Recipe } from 'contexts/RecipesProvider/types';
import { useEffect, useState } from 'react';
import { parseRecipeResponse } from 'services/recipes';

const useRecipes = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.RECIPES_LOADING,
  );
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchedIngredients, setSearchedIngredients] = useState<string[]>([]);

  // const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    async function asyncDelay() {
      // await delay(4000);
      const { recipes, searchedIngredients } = parseRecipeResponse(data);
      setRecipes(recipes);
      setSearchedIngredients(searchedIngredients);

      setRequestStatus(RequestStatus.RECIPES_SUCCESS);
    }
    asyncDelay();
  }, []);

  return { requestStatus, recipes, searchedIngredients, setRequestStatus };
};

export default useRecipes;
