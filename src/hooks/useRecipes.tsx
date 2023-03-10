import { data } from 'contexts/RecipesProvider/mockData';
import { RequestStatus, Recipe } from 'contexts/RecipesProvider/types';
import { useState, useCallback, useEffect } from 'react';
import { parseRecipeResponse } from 'services/recipes';
import { useFetch } from './useFetch';

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchedIngredients, setSearchedIngredients] = useState<string[]>([]);
  const { setRequest, result, requestStatus, setRequestStatus } =
    useFetch('getRecipes');

  const delay = useCallback(
    async (ms: number) => new Promise((res) => setTimeout(res, ms)),
    [],
  );

  const getMockData = useCallback(async () => {
    console.log('useRecipes > getMock data callback > delay');

    await delay(4000);
    const { recipes, searchedIngredients } = parseRecipeResponse(data);
    setRecipes(recipes);
    setSearchedIngredients(searchedIngredients);
    console.log('useRecipes > getMock data callback > mock data set!');
  }, [delay]);

  const getRecipes = useCallback(
    (pantryItems: string[]) => {
      console.log(
        'useRecipes > getRecipes callback > button click, page loading',
      );
      setRequestStatus(RequestStatus.RECIPES_LOADING);
      const url = pantryItems.join('');
      setRequest({ url, options: {} });
      console.log('useRecipes > getRecipes callback > request set!');
    },
    [setRequest, setRequestStatus],
  );

  const setResult = useCallback(async () => {
    console.log('useRecipes > setResult callback > setting result');
    // setRecipes(result);
    await getMockData();
    setRequestStatus(RequestStatus.RECIPES_SUCCESS);
    console.log(
      'useRecipes > setResult callback > finished setting, status set to success!',
    );
  }, [setRequestStatus, getMockData]);
  useEffect(() => {
    if (result) {
      setResult();
    }
  }, [result, setResult]);

  return {
    requestStatus,
    recipes,
    searchedIngredients,
    setRequestStatus,
    getRecipes,
  };
};

export default useRecipes;
