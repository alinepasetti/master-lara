import { screen } from '@testing-library/react';
import { PantrySection } from '.';
import { renderTheme } from '../../styles/render-theme';
import { buildPantryProviderValueMock } from '../../mocks/pantry';
import { PantryContext } from '../../contexts/PantryProvider/context';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { buildRecipesProviderValueMock } from '../../mocks/recipes';

const PantrySectionElement = (
  pantryItems?: string[],
  searchValue?: string,
  removePantryItemMock?,
) => (
  <RecipesContext.Provider value={buildRecipesProviderValueMock()}>
    <PantryContext.Provider
      value={buildPantryProviderValueMock(
        pantryItems,
        searchValue,
        removePantryItemMock,
      )}
    >
      <PantrySection />
    </PantryContext.Provider>
  </RecipesContext.Provider>
);

describe('<PantrySection />', () => {
  it('should render a form and a list', () => {
    renderTheme(PantrySectionElement());
    expect(
      screen
        .getByRole('textbox')
        .parentElement.parentElement.nodeName.toLowerCase(),
    ).toBe('form');
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
