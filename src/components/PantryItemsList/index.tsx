import { useContext } from 'react';
import * as Styled from './styles';
import { PantryContext } from 'contexts/PantryProvider/context';
import { Close } from '@styled-icons/material-outlined';

export const PantryItemsList = () => {
  const { pantryItems, removePantryItem } = useContext(PantryContext);
  return (
    <Styled.Container aria-label="ingredients-list">
      {!pantryItems.length && (
        <Styled.Message>No items on the pantry yet.</Styled.Message>
      )}
      {!!pantryItems.length &&
        pantryItems.map((pantryItem) => (
          <Styled.PantryItem key={pantryItem}>
            <span>
              {pantryItem}
              <Close onClick={() => removePantryItem(pantryItem)} />
            </span>
          </Styled.PantryItem>
        ))}
    </Styled.Container>
  );
};
