import * as Styled from './styles';
import { Button as SearchButton } from 'components/Button';
import { Heading } from 'components/Heading';
import { PantryItemsList } from 'components/PantryItemsList';
export const MyPantryContainer = () => {
  return (
    <Styled.Container>
      <Heading>My Pantry</Heading>
      <PantryItemsList />
      <SearchButton clickHandler={() => console.log('search!')}>
        Search
      </SearchButton>
    </Styled.Container>
  );
};
