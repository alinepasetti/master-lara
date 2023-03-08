import { Recipe } from 'contexts/RecipesProvider/types';
import * as Styled from './styles';

export type RecipeStepsProps = {
  ingredientLines: Recipe['ingredientLines'];
};

export const RecipeSteps = ({ ingredientLines }: RecipeStepsProps) => {
  return (
    <Styled.Container>
      <ul>
        {ingredientLines.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </Styled.Container>
  );
};
