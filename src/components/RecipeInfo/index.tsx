import { Recipe } from 'contexts/RecipesProvider/types';
import * as Styled from './styles';
import { Heading } from 'components/Heading';
import { secondsToMinutes } from 'services/utils';

export type RecipeInfoProps = {
  label: Recipe['label'];
  cuisineType: Recipe['cuisineType'];
  totalTime: Recipe['totalTime'];
};

export const RecipeInfo = ({
  label,
  cuisineType,
  totalTime,
}: RecipeInfoProps) => {
  return (
    <Styled.Container>
      <Heading>{label}</Heading>
      <Styled.Tag>{cuisineType}</Styled.Tag>
      <Styled.Tag>{secondsToMinutes(totalTime)}</Styled.Tag>
    </Styled.Container>
  );
};
