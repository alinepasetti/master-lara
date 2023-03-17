import { useContext } from 'react';
import * as Styled from './styles';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { RequestStatus } from '../../contexts/RecipesProvider/types';
import { RecipeCard } from '../RecipeCard';
import { Heading } from '../Heading';
import { Heading as Message } from '../Heading';

export const Recipes = () => {
  const { recipes, requestStatus } = useContext(RecipesContext);
  return (
    <Styled.Container>
      {requestStatus === RequestStatus.RECIPES_ERROR && (
        <Heading>Error loading recipes.</Heading>
      )}

      {requestStatus === RequestStatus.RECIPES_LOADING && (
        <Message>LOADING...</Message>
      )}

      {requestStatus === RequestStatus.RECIPES_IDLE && (
        <Message>Waiting for your search, Master 👩‍🍳</Message>
      )}

      {requestStatus === RequestStatus.RECIPES_SUCCESS && !recipes.length && (
        <Message>Ooops... No recipes found 😢🧆</Message>
      )}

      {requestStatus === RequestStatus.RECIPES_SUCCESS &&
        recipes.map((recipe) => {
          return <RecipeCard key={recipe.label} {...recipe} />;
        })}
    </Styled.Container>
  );
};
