import { Recipe } from 'contexts/RecipesProvider/types';
import * as Styled from './styles';

export type RecipeStepsProps = {
  ingredientLines: Recipe['ingredientLines'];
};

export const RecipeSteps = ({ ingredientLines }: RecipeStepsProps) => {
  return (
    <Styled.Container>
      {ingredientLines.map((ingredient) => (
        <Styled.ListItem key={ingredient}>{ingredient}</Styled.ListItem>
      ))}
    </Styled.Container>
  );
};
