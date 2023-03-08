import * as Styled from './styles';
import { IngredientLinesChecked } from 'contexts/ActiveRecipe/types';

export type IngredientsListProps = {
  ingredientLines: IngredientLinesChecked[];
};

export const IngredientsList = ({ ingredientLines }: IngredientsListProps) => {
  return (
    <Styled.Container aria-label="ingredients-list">
      {ingredientLines.map((ingredient) => (
        <Styled.ListItem
          hasIngredient={ingredient.hasIngredient}
          key={ingredient.ingredient}
        >
          {ingredient.ingredient}
        </Styled.ListItem>
      ))}
    </Styled.Container>
  );
};
