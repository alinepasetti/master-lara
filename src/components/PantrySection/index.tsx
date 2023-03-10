import * as Styled from './styles';
import { PantryItemsSearchForm } from '../PantryItemsSearchForm';
import { MyPantryContainer } from '../MyPantryContainer';

export const PantrySection = () => {
  return (
    <Styled.Container>
      <PantryItemsSearchForm />
      <MyPantryContainer />
    </Styled.Container>
  );
};
