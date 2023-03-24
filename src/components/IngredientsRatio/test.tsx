import { screen } from '@testing-library/react';
import { IngredientsRatio } from '../IngredientsRatio';
import { renderTheme } from '../../styles/render-theme';

describe('<IngredientsRatio />', () => {
  it('should render a heading', () => {
    renderTheme(<IngredientsRatio ingredientRatio={30} />);
    const heading = screen.getByText('30');
    expect(heading).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    renderTheme(<IngredientsRatio ingredientRatio={30} />);
    expect(screen.getByText('30')).toMatchSnapshot();
  });
});
