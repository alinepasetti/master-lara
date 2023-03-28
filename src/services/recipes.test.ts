import {
  buildMessage,
  sameSearchedIngredients,
  hasIngredientCheck,
} from './recipes';
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
      '1 garlic clove%0a- 1/2 onion%0a- 1/2 cup ground beef (or quorn mince)';
    const ingredientLines = hasIngredientCheck(
      RECIPE_MOCK.ingredientLines.slice(0, 3),
      ['sugar'],
    );

    expect(buildMessage(RECIPE_MOCK.label, ingredientLines, '123abc')).toEqual(
      `Come and cook ${RECIPE_MOCK.label} with me.👩‍🍳%0aJust bring:%0a- ${missingIngredients}%0axoxo ❤️%0aPS: curious? http://localhost/recipe/123abc`,
    );
  });
});

describe('sameSearchedIngredients', () => {
  it('should return true when all searched ingredients are the same', () => {
    const SEARCHED_INGREDIENTS_MOCK = ['banana', 'orange'];
    const PANTRY_ITEMS_MOCK = ['orange', 'banana'];
    const sameIngredients = sameSearchedIngredients(
      PANTRY_ITEMS_MOCK,
      SEARCHED_INGREDIENTS_MOCK,
    );

    expect(sameIngredients).toBeTruthy();
  });

  it('should return false when searched ingredients are not the same', () => {
    const SEARCHED_INGREDIENTS_MOCK = ['banana', 'orange'];
    const PANTRY_ITEMS_MOCK = ['orange', 'strawberry'];
    const sameIngredients = sameSearchedIngredients(
      PANTRY_ITEMS_MOCK,
      SEARCHED_INGREDIENTS_MOCK,
    );

    expect(sameIngredients).toBeFalsy();
  });

  it('should return false when missing some searched ingredients', () => {
    const SEARCHED_INGREDIENTS_MOCK = ['banana', 'orange'];
    const PANTRY_ITEMS_MOCK = ['orange', 'banana', 'strawberry'];
    const sameIngredients = sameSearchedIngredients(
      PANTRY_ITEMS_MOCK,
      SEARCHED_INGREDIENTS_MOCK,
    );

    expect(sameIngredients).toBeFalsy();
  });
});
