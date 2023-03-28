import usePantry from 'hooks/usePantry';
import { PantryContext } from './context';

export type PantryProviderProps = {
  children: React.ReactNode;
};

export const PantryProvider = ({ children }: PantryProviderProps) => {
  const {
    pantryItems,
    addPantryItem,
    removePantryItem,
    searchValue,
    handleChange,
    resetState,
    inputRef,
  } = usePantry();
  return (
    <PantryContext.Provider
      value={{
        pantryItems,
        addPantryItem,
        removePantryItem,
        searchValue,
        handleChange,
        resetState,
        inputRef,
      }}
    >
      {children}
    </PantryContext.Provider>
  );
};
