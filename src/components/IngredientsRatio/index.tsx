import * as Styled from './styles';

export type IngredientsRatioProps = {
  ingredientRatio: number;
};

export const IngredientsRatio = ({
  ingredientRatio,
}: IngredientsRatioProps) => {
  return (
    <Styled.Container>
      {ingredientRatio}
      <span>%</span>
    </Styled.Container>
  );
};
