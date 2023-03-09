import { screen, within } from '@testing-library/react';
import { IngredientsList } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<IngredientsList />', () => {
  it('should render 1 list item', () => {
    renderTheme(
      <IngredientsList
        ingredientLines={[{ ingredient: 'sugar', hasIngredient: true }]}
        label="sweet chilli"
      />,
    );
    const list = screen.getByRole('list', {
      name: /ingredients/i,
    });

    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(1);
  });

  it('should render list of given ingredients', () => {
    renderTheme(
      <IngredientsList
        ingredientLines={[
          { ingredient: 'sugar', hasIngredient: true },
          { ingredient: 'cane', hasIngredient: false },
        ]}
        label="sweet chilli"
      />,
    );
    const list = screen.getByRole('list', {
      name: /ingredients/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    const ingredients = items.map((item) => item.textContent);

    expect(ingredients).toEqual(['sugar', 'cane']);
  });

  it('should match snapshot', () => {
    renderTheme(
      <IngredientsList
        ingredientLines={[
          { ingredient: 'sugar', hasIngredient: true },
          { ingredient: 'pepper', hasIngredient: true },
        ]}
        label="sweet chilli"
      />,
    );
    expect(
      screen.getByRole('list', { name: /ingredients/i }),
    ).toMatchSnapshot();
  });
});
