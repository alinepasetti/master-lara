import { hasIngredientCheck } from './recipes';

describe('hasIngredientCheck', () => {
  it('should tag the ingredients the user has or not', () => {
    expect(
      hasIngredientCheck(['banana strudel', 'chocolate'], ['banana']),
    ).toEqual([
      { ingredient: 'banana strudel', hasIngredient: true },
      { ingredient: 'chocolate', hasIngredient: false },
    ]);
  });

  it('should sort the ingredients the user has to the top', () => {
    expect(
      hasIngredientCheck(
        ['Marshmallow', 'banana strudel', 'chocolate'],
        ['banana'],
      ),
    ).toEqual([
      { ingredient: 'banana strudel', hasIngredient: true },
      { ingredient: 'Marshmallow', hasIngredient: false },
      { ingredient: 'chocolate', hasIngredient: false },
    ]);
  });
});
