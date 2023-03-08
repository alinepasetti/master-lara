import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { RequestStatus } from '../../contexts/RecipesProvider/types';
import { RECIPE_MOCK_DATA } from '../RecipeCard/test';
import { Recipes } from '.';

describe('<Recipes />', () => {
  it('should render the loading label', () => {
    renderTheme(
      <RecipesContext.Provider
        value={{
          recipes: [],
          searchedIngredients: [],
          requestStatus: RequestStatus.RECIPES_LOADING,
        }}
      >
        <Recipes />
      </RecipesContext.Provider>,
    );
    const heading = screen.getByRole('heading', { name: /loading/i });
    expect(heading).toBeInTheDocument();
  });

  it('should render 3 recipe cards', () => {
    renderTheme(
      <RecipesContext.Provider
        value={{
          recipes: [RECIPE_MOCK_DATA, RECIPE_MOCK_DATA, RECIPE_MOCK_DATA],
          searchedIngredients: [],
          requestStatus: RequestStatus.RECIPES_SUCCESS,
        }}
      >
        <Recipes />
      </RecipesContext.Provider>,
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
