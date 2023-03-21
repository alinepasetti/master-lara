import { Recipe } from 'contexts/RecipesProvider/types';
import * as Styled from './styles';
import Heading from '../Heading';
import { secondsToMinutes } from '../../services/utils';
import { AiFillClockCircle } from 'react-icons/ai';
import { GiKnifeFork } from 'react-icons/gi';

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
      <Styled.Tag>
        <GiKnifeFork />
        {cuisineType}
      </Styled.Tag>
      <Styled.Tag>
        <AiFillClockCircle />
        {secondsToMinutes(totalTime)}
      </Styled.Tag>
      <Styled.Divider />
    </Styled.Container>
  );
};
