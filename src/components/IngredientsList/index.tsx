import { Link } from '../Link';
import * as Styled from './styles';
import {
  ActiveRecipe,
  IngredientLinesChecked,
} from '../../contexts/ActiveRecipe/types';
import { buildMessage } from '../../services/recipes';
import { Whatsapp } from '@styled-icons/boxicons-logos';

export type IngredientsListProps = {
  label: ActiveRecipe['label'];
  ingredientLines: IngredientLinesChecked[];
};

export const IngredientsList = ({
  ingredientLines,
  label,
}: IngredientsListProps) => {
  const message = buildMessage(label, ingredientLines);
  return (
    <Styled.Container aria-label="ingredients-list">
      {ingredientLines.map((ingredient) => (
        <Styled.ListItem
          hasIngredient={ingredient.hasIngredient}
          key={ingredient.ingredient}
        >
          {ingredient.ingredient}
        </Styled.ListItem>
      ))}
      <Link url={`https://api.whatsapp.com/send?text=${message}`}>
        <Whatsapp /> Invite a friend!
      </Link>
    </Styled.Container>
  );
};
