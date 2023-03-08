import { screen, within } from '@testing-library/react';
import { RecipeSteps } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<RecipeSteps />', () => {
  it('should render 1 list item', () => {
    renderTheme(<RecipeSteps ingredientLines={['sugar']} />);
    const list = screen.getByRole('list', {
      name: /ingredients/i,
    });

    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(1);
  });

  it('should render list of given ingredients', () => {
    renderTheme(<RecipeSteps ingredientLines={['sugar', 'cane']} />);
    const list = screen.getByRole('list', {
      name: /ingredients/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    const ingredients = items.map((item) => item.textContent);

    expect(ingredients).toEqual(['sugar', 'cane']);
  });

  it('should match snapshot', () => {
    renderTheme(<RecipeSteps ingredientLines={['sugar', 'pepper']} />);
    expect(
      screen.getByRole('list', { name: /ingredients/i }),
    ).toMatchSnapshot();
  });
});
