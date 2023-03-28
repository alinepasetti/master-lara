import { screen } from '@testing-library/react';
import NavBar from '../NavBar';
import { renderTheme } from '../../styles/render-theme';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { PantryContext } from '../../contexts/PantryProvider/context';
import { buildPantryProviderValueMock } from '../../mocks/pantry';
import { buildRecipesProviderValueMock } from '../../mocks/recipes';

const NavBarElement = (
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
      <NavBar />
    </PantryContext.Provider>
  </RecipesContext.Provider>
);

describe('<NavBar />', () => {
  it('should render a nav bar', () => {
    renderTheme(NavBarElement());
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
