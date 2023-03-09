import { buildMessage, hasIngredientCheck } from './recipes';
import { data } from '../contexts/RecipesProvider/mockData';

describe('hasIngredientCheck', () => {
  it('should tag the ingredients the user has or not', () => {
    expect(
      hasIngredientCheck(['banana strudel', 'chocolate'], ['banana']),
    ).toEqual([
      { ingredient: 'banana strudel', hasIngredient: true },
      { ingredient: 'chocolate', hasIngredient: false },
    ]);

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
});

describe('buildMessage', () => {
  it('should build the message with missing ingredients', () => {
    const RECIPE_MOCK = data.hits[0].recipe;
    const missingIngredients =
      '1 garlic clove, 1/2 onion, 1/2 cup ground beef (or quorn mince)';
    const ingredientLines = hasIngredientCheck(
      RECIPE_MOCK.ingredientLines.slice(0, 3),
      ['sugar'],
    );

    expect(buildMessage(RECIPE_MOCK.label, ingredientLines)).toEqual(
      `Come and cook ${RECIPE_MOCK.label} with me. Just bring: ${missingIngredients}. xoxo`,
    );
  });
});
