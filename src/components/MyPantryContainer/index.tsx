import * as Styled from './styles';
import { Button as SearchButton } from 'components/Button';
import { Heading } from 'components/Heading';
import { PantryItemsList } from 'components/PantryItemsList';
import { PantryContext } from 'contexts/PantryProvider/context';
import { RecipesContext } from 'contexts/RecipesProvider/context';
import { useContext } from 'react';
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
