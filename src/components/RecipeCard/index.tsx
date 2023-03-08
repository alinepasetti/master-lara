import * as Styled from './styles';
import { secondsToMinutes } from '../../services/utils';
import { Heading } from '../Heading';
import Link from 'next/link';
import { IngredientsRatio } from '../IngredientsRatio';

export type RecipeCardProps = {
  id: string;
  label: string;
  image: string;
  totalTime: number;
  cuisineType: string;
  ingredientRatio: string;
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
          <Styled.Tag>{cuisineType}</Styled.Tag>
          <Styled.Tag>{secondsToMinutes(totalTime)}</Styled.Tag>
          <IngredientsRatio ingredientRatio={ingredientRatio} />
        </Styled.ContentContainer>
      </Styled.Container>
    </Link>
  );
};
