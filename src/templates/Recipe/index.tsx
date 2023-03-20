import { Link as WhatsappButton } from 'components/Link';
import Heading from 'components/Heading';
import { ImageHeader } from 'components/ImageHeader';
import { RecipeInfo } from 'components/RecipeInfo';
import { IngredientsList } from 'components/IngredientsList';
import { ActiveRecipeContext } from 'contexts/ActiveRecipe/context';
import { useContext } from 'react';
import { RequestStatus } from 'contexts/RecipesProvider/types';
import * as Styled from './styles';
import { Whatsapp } from '@styled-icons/boxicons-logos';
import { buildMessage } from '../../services/recipes';

function RecipeDetail() {
  const { activeRecipe, requestStatus } = useContext(ActiveRecipeContext);

  return (
    <Styled.Wrapper>
      {requestStatus === RequestStatus.RECIPES_ERROR && (
        <Heading>Error loading recipe.</Heading>
      )}

      {(requestStatus === RequestStatus.RECIPES_LOADING ||
        requestStatus === RequestStatus.RECIPES_IDLE ||
        !activeRecipe) && <Heading>LOADING...</Heading>}

      {requestStatus === RequestStatus.RECIPES_SUCCESS && (
        <>
          <ImageHeader
            srcImage={activeRecipe.image}
            text={activeRecipe.label}
          />
          <RecipeInfo
            cuisineType={activeRecipe.cuisineType}
            label={activeRecipe.label}
            totalTime={activeRecipe.totalTime}
            ingredientRatio={activeRecipe.ingredientRatio}
          />
          <IngredientsList
            ingredientLines={activeRecipe.ingredientLines}
            recipeUrl={activeRecipe.url}
          />
          <WhatsappButton
            url={`https://api.whatsapp.com/send?text=${buildMessage(
              activeRecipe.label,
              activeRecipe.ingredientLines,
            )}`}
          >
            <Whatsapp /> Invite a friend!
          </WhatsappButton>
        </>
      )}
    </Styled.Wrapper>
  );
}

export default RecipeDetail;
