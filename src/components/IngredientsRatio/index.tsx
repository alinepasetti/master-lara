import * as Styled from './styles';

export type IngredientsRatioProps = {
  ingredientRatio: string;
};

export const IngredientsRatio = ({
  ingredientRatio,
}: IngredientsRatioProps) => {
  return (
    <Styled.Container>
      {ingredientRatio}
      <span>ingredients</span>
    </Styled.Container>
  );
};
