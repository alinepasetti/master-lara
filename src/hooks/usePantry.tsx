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
      const newPantryItem = searchValue.trim().toLowerCase();
      if (!pantryItems.includes(newPantryItem)) {
        setPantryItems((prevPantryItems) => [
          ...prevPantryItems,
          newPantryItem,
        ]);
        setSearchValue('');
      } else {
        alert(
          'Pantry item is already on the list 🎻\nPlease, try another ingredient.',
        );
      }
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
