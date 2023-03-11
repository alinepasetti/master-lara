import { screen } from '@testing-library/react';
import { PantryItemsSearchForm } from '.';
import { renderTheme } from '../../styles/render-theme';
import { PantryContext } from '../../contexts/PantryProvider/context';
import { buildPantryProviderValueMock } from '../../mocks/pantry';

const formElement = (
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
    <PantryItemsSearchForm />
  </PantryContext.Provider>
);

describe('<PantryItemsSearchForm />', () => {
  it('should render a form, input and button', () => {
    renderTheme(formElement());
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(
      screen.getByRole('textbox').parentElement.nodeName.toLowerCase(),
    ).toBe('form');
    console.log(screen.getByRole('textbox').parentElement.nodeName);
  });
});
