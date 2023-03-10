import { ChangeEvent, useState } from 'react';

const useRecipes = () => {
  const [pantryItems, setPantryItems] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const addPantryItem = (): void => {
    if (searchValue.length) {
      setPantryItems((prevPantryItems) => [
        ...prevPantryItems,
        searchValue.toLowerCase(),
      ]);
      setSearchValue('');
    }
  };

  const removePantryItem = (removedItem: string): void => {
    const clearPantry = pantryItems.filter(
      (item: string) => item.toLowerCase() !== removedItem.toLowerCase(),
    );
    setPantryItems(clearPantry);
  };

  return {
    pantryItems,
    addPantryItem,
    removePantryItem,
    searchValue,
    handleChange,
  };
};

export default useRecipes;
