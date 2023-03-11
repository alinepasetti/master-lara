import { useContext } from 'react';
import * as Styled from './styles';
import { PantryContext } from '../../contexts/PantryProvider/context';
import { Button as AddPantryItemButton } from '../Button';
import { Add } from '@styled-icons/material-outlined';

export const PantryItemsSearchForm = () => {
  const { searchValue, handleChange, addPantryItem } =
    useContext(PantryContext);
  return (
    <Styled.Container onSubmit={(event) => event.preventDefault()}>
      <Styled.Input
        type="text"
        placeholder="What's in your pantry?"
        value={searchValue}
        onChange={(event) => handleChange(event)}
      />
      <AddPantryItemButton clickHandler={addPantryItem}>
        <Add />
      </AddPantryItemButton>
    </Styled.Container>
  );
};
