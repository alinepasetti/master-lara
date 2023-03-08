import { useContext } from 'react';
import * as Styled from './styles';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { RequestStatus } from '../../contexts/RecipesProvider/types';
import { RecipeCard } from '../RecipeCard';
import { Heading } from '../Heading';

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
