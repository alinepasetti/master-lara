import { RecipesContext } from 'contexts/RecipesProvider/context';
import { data } from 'contexts/RecipesProvider/mockData';
import { Recipe } from 'contexts/RecipesProvider/types';
import { useEffect, useState, useContext, useCallback } from 'react';
import { parseRecipeResponse } from 'services/recipes';

const useActiveRecipe = (id: string) => {
  const [activeRecipe, setActiveRecipe] = useState<Recipe>(null);
  const { recipes } = useContext(RecipesContext);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const findRecipeById = useCallback(
    (id: string) => {
      let filterSearchedRecipes = recipes.find((recipe) => recipe.id === id);
      if (!filterSearchedRecipes) {
        // MOCK fetch api with ID
        filterSearchedRecipes = parseRecipeResponse(data)[1];
      }
      setActiveRecipe(filterSearchedRecipes);
    },
    [recipes],
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
