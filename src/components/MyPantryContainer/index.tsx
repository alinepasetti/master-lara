import { useContext } from 'react';
import * as Styled from './styles';
import { PantryContext } from '../../contexts/PantryProvider/context';
import { Button as SearchButton } from '../Button';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { Heading } from '../Heading';
import { PantryItemsList } from '../PantryItemsList';

export const MyPantryContainer = () => {
  const { getRecipes } = useContext(RecipesContext);
  const { pantryItems } = useContext(PantryContext);
  return (
    <Styled.Container>
      <Heading>My Pantry</Heading>
      <PantryItemsList />
      <SearchButton clickHandler={() => getRecipes(pantryItems)}>
        Search
      </SearchButton>
    </Styled.Container>
  );
};
