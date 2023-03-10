import { ActiveRecipe } from 'contexts/ActiveRecipe/types';
import { RecipesContext } from 'contexts/RecipesProvider/context';
import { data } from 'contexts/RecipesProvider/mockData';
import { RequestStatus } from 'contexts/RecipesProvider/types';
import { useEffect, useState, useContext, useCallback } from 'react';
import { hasIngredientCheck, parseRecipeResponse } from 'services/recipes';
import { useFetch } from './useFetch';

const useActiveRecipe = (id: string) => {
  const [activeRecipe, setActiveRecipe] = useState<ActiveRecipe>(null);
  const { recipes, searchedIngredients } = useContext(RecipesContext);
  const { setRequest, result, requestStatus, setRequestStatus } =
    useFetch('activeRecipe');

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const findRecipeById = useCallback(
    (id: string) => {
      const filterSearchedRecipes = recipes.find((recipe) => {
        console.log('recipes', recipe.id, id);
        return recipe.id === id;
      });
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
        // MOCK fetch api with ID
        console.log(
          'useActiveRecipe > findRecipeById > new recipe detail, fetching info.',
        );
        setRequest({ url: 'url', options: {} });
      }
    },
    [recipes, searchedIngredients, setRequest, setRequestStatus],
  );

  useEffect(() => {
    if (result) {
      console.log(
        'useActiveRecipe > result useEffect > request result changed',
        result,
      );
      const recipe = parseRecipeResponse(data).recipes[1];
      const activeRecipe = {
        ...recipe,
        ingredientLines: hasIngredientCheck(
          recipe.ingredientLines,
          searchedIngredients,
        ),
      };
      setActiveRecipe(activeRecipe);
      setRequestStatus(RequestStatus.RECIPES_SUCCESS);
      console.log(
        'useActiveRecipe > result useEffect > result set, status set to success!',
      );
    }
  }, [result, searchedIngredients, setRequestStatus]);

  useEffect(() => {
    async function asyncDelay() {
      if (id) {
        setRequestStatus(RequestStatus.RECIPES_LOADING);
        console.log(
          'useActiveRecipe > get id useEffect > received id - loading',
          id,
        );
        await delay(4000);
        findRecipeById(id);
      }
    }
    asyncDelay();

    () => setActiveRecipe(null);
  }, [id, findRecipeById, setRequestStatus]);

  return { activeRecipe, findRecipeById, requestStatus };
};

export default useActiveRecipe;
