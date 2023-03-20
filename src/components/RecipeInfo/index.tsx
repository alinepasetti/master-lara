import { Recipe } from 'contexts/RecipesProvider/types';
import * as Styled from './styles';
import Heading from '../Heading';
import { secondsToMinutes } from '../../services/utils';
import { IngredientsRatio } from '../IngredientsRatio';

export type RecipeInfoProps = {
  label: Recipe['label'];
  cuisineType: Recipe['cuisineType'];
  totalTime: Recipe['totalTime'];
  ingredientRatio: Recipe['ingredientRatio'];
};

export const RecipeInfo = ({
  label,
  cuisineType,
  totalTime,
  ingredientRatio,
}: RecipeInfoProps) => {
  return (
    <Styled.Container>
      <Heading>{label}</Heading>
      <Styled.Tag>{cuisineType}</Styled.Tag>
      <Styled.Tag>{secondsToMinutes(totalTime)}</Styled.Tag>
      <IngredientsRatio ingredientRatio={ingredientRatio} />
      <Styled.Divider />
    </Styled.Container>
  );
};
