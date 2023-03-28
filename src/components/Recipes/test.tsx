import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { Recipe, RequestStatus } from '../../contexts/RecipesProvider/types';
import { Recipes } from '.';
import {
  RECIPE_MOCK_DATA,
  buildRecipesProviderValueMock,
} from '../../mocks/recipes';

const recipesElement = (recipes?: Recipe[], requestStatus?: RequestStatus) => (
  <RecipesContext.Provider
    value={buildRecipesProviderValueMock(recipes, requestStatus)}
  >
    <Recipes />
  </RecipesContext.Provider>
);

describe('<Recipes />', () => {
  it('should render the loading label', () => {
    renderTheme(recipesElement([], RequestStatus.RECIPES_LOADING));
    const heading = screen.getByRole('heading', { name: /loading/i });
    expect(heading).toBeInTheDocument();
  });

  it('should render 3 recipe cards', () => {
    renderTheme(
      recipesElement(
        [RECIPE_MOCK_DATA, RECIPE_MOCK_DATA, RECIPE_MOCK_DATA],
        RequestStatus.RECIPES_SUCCESS,
      ),
    );
    const recipeCards = screen.getAllByRole('link', { name: /sweet sugar/i });
    expect(recipeCards).toHaveLength(3);
  });

  it('should match snapshot', () => {
    renderTheme(
      <RecipesContext.Provider
        value={{
          recipes: [RECIPE_MOCK_DATA, RECIPE_MOCK_DATA, RECIPE_MOCK_DATA],
          searchedIngredients: [],
          requestStatus: RequestStatus.RECIPES_SUCCESS,
          getRecipes: () => 'oi',
          resetState: () => 'oi',
        }}
      >
        <Recipes />
      </RecipesContext.Provider>,
    );
    expect(
      screen.getAllByRole('link', { name: /sweet sugar/i })[0].parentElement,
    ).toMatchSnapshot();
  });
});
