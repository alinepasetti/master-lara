import { screen } from '@testing-library/react';
import { RecipeInfo } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<RecipeInfo />', () => {
  it('should render a heading and tags', () => {
    renderTheme(
      <RecipeInfo
        label="couscous"
        cuisineType="Moroccan"
        totalTime={60}
        ingredientRatio="1 / 3"
      />,
    );
    expect(
      screen.getByRole('heading', { name: 'couscous' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Moroccan' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '1 hour' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '1 / 3 ingredients' }),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    renderTheme(
      <RecipeInfo
        label="couscous"
        cuisineType="Moroccan"
        totalTime={60}
        ingredientRatio="1 / 3"
      />,
    );
    expect(
      screen.getByRole('heading', { name: 'couscous' }).parentElement,
    ).toMatchSnapshot();
  });
});
