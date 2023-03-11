import { screen, within } from '@testing-library/react';
import { PantryItemsList } from '.';
import { renderTheme } from '../../styles/render-theme';
import { PantryContext } from '../../contexts/PantryProvider/context';
import { buildPantryProviderValueMock } from '../../mocks/pantry';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

const pantryItemsListElement = (
  pantryItems?: string[],
  searchValue?: string,
  removePantryItemMock?,
) => (
  <PantryContext.Provider
    value={buildPantryProviderValueMock(
      pantryItems,
      searchValue,
      removePantryItemMock,
    )}
  >
    <PantryItemsList />
  </PantryContext.Provider>
);

describe('<PantryItemsList />', () => {
  it('should render 1 list item', () => {
    renderTheme(pantryItemsListElement(['banana']));
    const list = screen.getByRole('list', {
      name: /ingredients/i,
    });

    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(1);
  });

  it('should render list of ingredients added by the user', () => {
    renderTheme(pantryItemsListElement(['sugar', 'cane']));
    const list = screen.getByRole('list', {
      name: /ingredients/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    const ingredients = items.map((item) => item.textContent);

    expect(ingredients).toEqual(['sugar', 'cane']);
  });

  it('should call function to remove an element when clicked', () => {
    const removePantryItemMock = vi.fn();

    renderTheme(
      pantryItemsListElement(
        ['sugar', 'cane'],
        undefined,
        removePantryItemMock,
      ),
    );
    const closeIcon = screen.getByText('sugar').lastElementChild;

    userEvent.click(closeIcon);

    expect(removePantryItemMock).toBeCalledTimes(1);
  });

  it('should match snapshot', () => {
    renderTheme(pantryItemsListElement());
    expect(screen.getByText('No items on the pantry yet.')).toBeInTheDocument();
  });

  it('should match snapshot with no items', () => {
    renderTheme(pantryItemsListElement());
    expect(
      screen.getByRole('list', { name: /ingredients/i }),
    ).toMatchSnapshot();
  });

  it('should match snapshot with items', () => {
    renderTheme(pantryItemsListElement(['sugar', 'cane']));
    expect(
      screen.getByRole('list', { name: /ingredients/i }),
    ).toMatchSnapshot();
  });
});
