import * as Styled from './styles';
import { IngredientLinesChecked } from '../../contexts/ActiveRecipe/types';
import { Link } from 'components/Link';

export type IngredientsListProps = {
  ingredientLines: IngredientLinesChecked[];
  recipeUrl: string;
};

export const IngredientsList = ({
  ingredientLines,
  recipeUrl,
}: IngredientsListProps) => {
  return (
    <Styled.Container aria-label="ingredients-list">
      {ingredientLines.map((ingredient) => (
        <Styled.ListItem key={ingredient.ingredient}>
          {ingredient.hasIngredient ? (
            <Styled.CheckIcon />
          ) : (
            <Styled.UncheckIcon />
          )}
          {ingredient.ingredient}
        </Styled.ListItem>
      ))}
      <Link url={recipeUrl}>See more</Link>
    </Styled.Container>
  );
};
