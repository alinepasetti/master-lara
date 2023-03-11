import { vi } from 'vitest';

export const buildPantryProviderValueMock = (
  pantryItems = [],
  searchValue = 'sugar',
  removePantryItem = vi.fn(),
) => {
  return {
    pantryItems,
    searchValue,
    removePantryItem,
    addPantryItem: vi.fn(),
    handleChange: vi.fn(),
  };
};
