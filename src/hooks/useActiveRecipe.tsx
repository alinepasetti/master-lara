import { ActiveRecipe } from 'contexts/ActiveRecipe/types';
import { RecipesContext } from 'contexts/RecipesProvider/context';
import { data } from 'contexts/RecipesProvider/mockData';
import { RequestStatus } from 'contexts/RecipesProvider/types';
import { useEffect, useState, useContext, useCallback, useRef } from 'react';
import { hasIngredientCheck, parseRecipeResponse } from 'services/recipes';
import { useFetch, useMock } from './useFetch';

const useActiveRecipe = (id: string) => {
  const [activeRecipe, setActiveRecipe] = useState<ActiveRecipe>(null);
  const idRef = useRef<string>('');
  const { recipes, searchedIngredients } = useContext(RecipesContext);
  const { setEndPoint, result, requestStatus, setRequestStatus } =
    useFetch('ActiveRecipe');

  const delay = useCallback(
    async (ms: number) => new Promise((res) => setTimeout(res, ms)),
    [],
  );

  const getMockData = useCallback(async () => {
    console.log('useRecipes > getMock data callback > delay');

    await delay(4000);
    const { recipes, searchedIngredients } = parseRecipeResponse(data);
    const activeRecipe = {
      ...recipes[0],
      ingredientLines: hasIngredientCheck(
        recipes[0].ingredientLines,
        searchedIngredients,
      ),
    };
    setActiveRecipe(activeRecipe);
    setRequestStatus(RequestStatus.RECIPES_SUCCESS);
    console.log('useRecipes > getMock data callback > mock data set!');
  }, [delay, setRequestStatus]);

  const setResult = useCallback(() => {
    if (useMock) return getMockData();

    console.log('useActiveRecipe > result useEffect > request result changed');
    const { recipes, searchedIngredients } = parseRecipeResponse(result);
    const activeRecipe = {
      ...recipes[0],
      ingredientLines: hasIngredientCheck(
        recipes[0].ingredientLines,
        searchedIngredients,
      ),
    };
    setActiveRecipe(activeRecipe);
    setRequestStatus(RequestStatus.RECIPES_SUCCESS);
    console.log(
      'useActiveRecipe > result useEffect > result set, status set to success!',
    );
  }, [setRequestStatus, getMockData, result]);

  const findRecipeById = useCallback(
    (id: string) => {
      const filterSearchedRecipes = recipes.find((recipe) => recipe.id === id);

      if (filterSearchedRecipes) {
        console.log(
          'useActiveRecipe > findRecipeById > recipe found, setting its value...',
        );
        const activeRecipe = {
          ...filterSearchedRecipes,
          ingredientLines: hasIngredientCheck(
            filterSearchedRecipes.ingredientLines,
            searchedIngredients,
          ),
        };
        setActiveRecipe(activeRecipe);
        setRequestStatus(RequestStatus.RECIPES_SUCCESS);
        console.log('useActiveRecipe > findRecipeById > active recipe set!');
      } else {
        console.log(
          'useActiveRecipe > findRecipeById > new recipe detail, fetching info.',
        );
        setEndPoint(`${id}`);
      }
    },
    [recipes, searchedIngredients, setEndPoint, setRequestStatus],
  );

  useEffect(() => {
    if (result) {
      setResult();
    }
  }, [result, setResult]);

  useEffect(() => {
    const validId = id && idRef.current !== id;
    async function asyncDelay() {
      if (validId) {
        idRef.current = id;
        setRequestStatus(RequestStatus.RECIPES_LOADING);
        console.log(
          'useActiveRecipe > get id useEffect > received id - loading',
          id,
        );
        findRecipeById(id);
      }
    }
    asyncDelay();
  }, [id, setRequestStatus, findRecipeById]);

  return { activeRecipe, requestStatus };
};

export default useActiveRecipe;
