import { screen } from '@testing-library/react';
import { IngredientsRatio } from '../IngredientsRatio';
import { renderTheme } from '../../styles/render-theme';

describe('<IngredientsRatio />', () => {
  it('should render a heading', () => {
    renderTheme(<IngredientsRatio ingredientRatio="1 / 3" />);
    const heading = screen.getByRole('heading', { name: '1 / 3 ingredients' });
    expect(heading).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    renderTheme(<IngredientsRatio ingredientRatio="1 / 3" />);
    expect(
      screen.getByRole('heading', { name: '1 / 3 ingredients' }),
    ).toMatchSnapshot();
  });
});
