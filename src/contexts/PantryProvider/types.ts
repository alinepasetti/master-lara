import { ChangeEvent } from 'react';
export type PantryProps = {
  pantryItems: string[];
  searchValue: string;
  inputRef: React.RefObject<HTMLInputElement>;
  addPantryItem: () => void;
  removePantryItem: (removedItem: string) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  resetState: () => void;
};
