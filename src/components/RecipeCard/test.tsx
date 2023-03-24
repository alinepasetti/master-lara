import { screen } from '@testing-library/react';
import { RecipeCard } from '.';
import { renderTheme } from '../../styles/render-theme';
import { RECIPE_MOCK_DATA } from '../../mocks/recipes';

describe('<RecipeCard />', () => {
  it('should render the recipe card items', () => {
    renderTheme(<RecipeCard {...RECIPE_MOCK_DATA} />);
    expect(
      screen.getByRole('heading', {
        name: RECIPE_MOCK_DATA.label,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: RECIPE_MOCK_DATA.cuisineType,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: '1 hour',
      }),
    ).toBeInTheDocument();
    expect(screen.getByAltText('Sweet Sugar')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render link pointing to the recipe detail page', () => {
    renderTheme(<RecipeCard {...RECIPE_MOCK_DATA} />);
    expect(screen.getByRole('link', { name: /sweet sugar/i })).toHaveAttribute(
      'href',
      '/recipe/id',
    );
  });

  it('should match snapshot', () => {
    renderTheme(<RecipeCard {...RECIPE_MOCK_DATA} />);
    expect(
      screen.getByRole('link', { name: /sweet sugar/i }),
    ).toMatchSnapshot();
  });
});
