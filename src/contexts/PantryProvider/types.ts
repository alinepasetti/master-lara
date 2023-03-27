import { ChangeEvent } from 'react';
export type PantryProps = {
  pantryItems: string[];
  searchValue: string;
  addPantryItem: (event) => void;
  removePantryItem: (removedItem: string) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
