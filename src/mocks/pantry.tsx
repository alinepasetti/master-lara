import { vi } from 'vitest';

export const buildPantryProviderValueMock = (
  pantryItems = [],
  searchValue = 'sugar',
  removePantryItem = vi.fn(),
) => {
  return {
    pantryItems,
    searchValue,
    inputRef: null,
    removePantryItem,
    addPantryItem: vi.fn(),
    handleChange: vi.fn(),
    resetState: vi.fn(),
  };
};
