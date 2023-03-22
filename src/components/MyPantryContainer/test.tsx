import { screen } from '@testing-library/react';
import { MyPantryContainer } from '.';
import { renderTheme } from '../../styles/render-theme';
import { PantryContext } from '../../contexts/PantryProvider/context';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { buildPantryProviderValueMock } from '../../mocks/pantry';
import { buildRecipesProviderValueMock } from '../../mocks/recipes';

const myPantryContainerElement = (pantryItems?: string[]) => (
  <RecipesContext.Provider value={buildRecipesProviderValueMock()}>
    <PantryContext.Provider value={buildPantryProviderValueMock(pantryItems)}>
      <MyPantryContainer />
    </PantryContext.Provider>
  </RecipesContext.Provider>
);

describe('<MyPantryContainer />', () => {
  it('should render the expected elements', () => {
    renderTheme(myPantryContainerElement(['banana']));
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    renderTheme(myPantryContainerElement(['banana']));
    expect(screen.getByRole('heading').parentElement).toMatchSnapshot();
  });
});
