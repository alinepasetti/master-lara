import { screen } from '@testing-library/react';
import { RecipeCard } from '.';
import { renderTheme } from '../../styles/render-theme';

export const RECIPE_MOCK_DATA = {
  id: 'id',
  label: 'Sweet Sugar',
  image: 'image.jpg',
  ingredientLines: ['sugar'],
  cuisineType: 'Indian',
  totalTime: 60,
  ingredientRatio: '1 / 3',
  url: 'url.com',
};

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
    expect(
      screen.getByRole('heading', {
        name: '1 / 3 ingredients',
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
