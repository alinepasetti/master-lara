import { useContext } from 'react';
import * as Styled from './styles';
import { RecipesContext } from 'contexts/RecipesProvider/context';
import { RecipeCard } from 'components/RecipeCard';
import { RequestStatus } from 'contexts/RecipesProvider/types';

export const Recipes = () => {
  const { recipes, searchedIngredients, requestStatus } =
    useContext(RecipesContext);
  return (
    <Styled.Container>
      {requestStatus === RequestStatus.RECIPES_LOADING && <div>LOADING...</div>}

      {requestStatus === RequestStatus.RECIPES_SUCCESS &&
        recipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.label}
              data={{ ...recipe, searchedIngredients }}
            />
          );
        })}
    </Styled.Container>
  );
};
