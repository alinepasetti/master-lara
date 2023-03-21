import * as Styled from './styles';
import { secondsToMinutes } from '../../services/utils';
import Heading from '../Heading';
import Link from 'next/link';
import { IngredientsRatio } from '../IngredientsRatio';
import { AiFillClockCircle } from 'react-icons/ai';
import { GiKnifeFork } from 'react-icons/gi';

export type RecipeCardProps = {
  id: string;
  label: string;
  image: string;
  totalTime: number;
  cuisineType: string;
  ingredientRatio: number;
};

export const RecipeCard = ({
  id,
  label,
  image,
  totalTime,
  cuisineType,
  ingredientRatio,
}: RecipeCardProps) => {
  return (
    <Link href={`/recipe/${id}`} passHref legacyBehavior>
      <Styled.Container>
        <Styled.Image src={image} alt={label} />
        <Styled.ContentContainer>
          <Heading>{label}</Heading>
          <Styled.Tag>
            <GiKnifeFork />
            {cuisineType}
          </Styled.Tag>
          <Styled.Tag>
            <AiFillClockCircle />
            <span>{secondsToMinutes(totalTime)}</span>
          </Styled.Tag>
        </Styled.ContentContainer>
        <IngredientsRatio ingredientRatio={ingredientRatio} />
      </Styled.Container>
    </Link>
  );
};
