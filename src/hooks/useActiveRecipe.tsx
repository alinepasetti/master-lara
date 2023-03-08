import { ActiveRecipe } from 'contexts/ActiveRecipe/types';
import { RecipesContext } from 'contexts/RecipesProvider/context';
import { data } from 'contexts/RecipesProvider/mockData';
import { useEffect, useState, useContext, useCallback } from 'react';
import { hasIngredientCheck, parseRecipeResponse } from 'services/recipes';

const useActiveRecipe = (id: string) => {
  const [activeRecipe, setActiveRecipe] = useState<ActiveRecipe>(null);
  const { recipes, searchedIngredients } = useContext(RecipesContext);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const findRecipeById = useCallback(
    (id: string) => {
      let filterSearchedRecipes = recipes.find((recipe) => recipe.id === id);
      if (!filterSearchedRecipes) {
        // MOCK fetch api with ID
        filterSearchedRecipes = parseRecipeResponse(data)[1];
      }

      const activeRecipe = {
        ...filterSearchedRecipes,
        ingredientLines: hasIngredientCheck(
          filterSearchedRecipes.ingredientLines,
          searchedIngredients,
        ),
      } as ActiveRecipe;
      setActiveRecipe(activeRecipe);
    },
    [recipes, searchedIngredients],
  );

  useEffect(() => {
    async function asyncDelay() {
      await delay(1000);
      findRecipeById(id);
    }
    asyncDelay();

    () => setActiveRecipe(null);
  }, [id, findRecipeById]);

  return { activeRecipe, findRecipeById };
};

export default useActiveRecipe;
