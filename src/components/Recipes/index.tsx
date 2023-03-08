import { useContext } from 'react';
import * as Styled from './styles';
import { RecipesContext } from 'contexts/RecipesProvider/context';
import { RecipeCard } from 'components/RecipeCard';
import { RequestStatus } from 'contexts/RecipesProvider/types';
import { Heading } from 'components/Heading';

export const Recipes = () => {
  const { recipes, requestStatus } = useContext(RecipesContext);
  return (
    <Styled.Container>
      {requestStatus === RequestStatus.RECIPES_LOADING && (
        <Heading>LOADING...</Heading>
      )}

      {requestStatus === RequestStatus.RECIPES_SUCCESS &&
        recipes.map((recipe) => {
          return <RecipeCard key={recipe.label} {...recipe} />;
        })}
    </Styled.Container>
  );
};
