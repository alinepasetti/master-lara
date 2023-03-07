import * as Styled from './styles';
import { secondsToMinutes } from 'services/utils';
import { Heading } from 'components/Heading';
import Link from 'next/link';

export type RecipeCardProps = {
  data: {
    id: string;
    label: string;
    image: string;
    ingredientLines: string[];
    totalTime: number;
    cuisineType: string;
    searchedIngredients: string[];
  };
};

export const RecipeCard = ({
  data: {
    id,
    label,
    image,
    ingredientLines,
    totalTime,
    cuisineType,
    searchedIngredients,
  },
}: RecipeCardProps) => {
  return (
    <Link href={`/recipe/${id}`} passHref legacyBehavior>
      <Styled.Container>
        <Styled.Image src={image} alt={label} />
        <Styled.ContentContainer>
          <Heading>{label}</Heading>
          <Styled.Tag>{cuisineType}</Styled.Tag>
          <Styled.Tag>{secondsToMinutes(totalTime)}</Styled.Tag>
          <Styled.Tag>
            {searchedIngredients.length + '/' + ingredientLines.length}
            <span>ingredients</span>
          </Styled.Tag>
        </Styled.ContentContainer>
      </Styled.Container>
    </Link>
  );
};
