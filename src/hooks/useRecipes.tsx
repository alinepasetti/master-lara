import { data } from 'contexts/RecipesProvider/mockData';
import { RequestStatus, Recipe } from 'contexts/RecipesProvider/types';
import { useState, useCallback, useEffect } from 'react';
import { parseRecipeResponse } from 'services/recipes';
import { useFetch, useMock } from './useFetch';

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchedIngredients, setSearchedIngredients] = useState<string[]>([]);
  const { setEndPoint, result, requestStatus, setRequestStatus } =
    useFetch('GetRecipes');

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
    setRequestStatus(RequestStatus.RECIPES_SUCCESS);
    console.log('useRecipes > getMock data callback > mock data set!');
  }, [delay, setRequestStatus]);

  const getRecipes = useCallback(
    (pantryItems: string[]) => {
      console.log(
        'useRecipes > getRecipes callback > button click, page loading',
      );
      setRequestStatus(RequestStatus.RECIPES_LOADING);

      const endPoint = pantryItems.join('%2C');
      setEndPoint(endPoint);
      console.log('useRecipes > getRecipes callback > endPoint set!');
    },
    [setEndPoint, setRequestStatus],
  );

  const setResult = useCallback(() => {
    console.log('useRecipes > setResult callback > setting result');
    if (useMock) return getMockData();

    const { recipes, searchedIngredients } = parseRecipeResponse(result);

    setRecipes(recipes);
    setSearchedIngredients(searchedIngredients);
    setRequestStatus(RequestStatus.RECIPES_SUCCESS);
    console.log(
      'useRecipes > setResult callback > finished setting, status set to success!',
    );
  }, [
    setRequestStatus,
    setSearchedIngredients,
    setRecipes,
    result,
    getMockData,
  ]);

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
