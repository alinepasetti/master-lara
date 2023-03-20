import { Link } from 'components/Link';
import Heading from 'components/Heading';
import { ImageHeader } from 'components/ImageHeader';
import { RecipeInfo } from 'components/RecipeInfo';
import { IngredientsList } from 'components/IngredientsList';
import { ActiveRecipeContext } from 'contexts/ActiveRecipe/context';
import { useContext } from 'react';
import { RequestStatus } from 'contexts/RecipesProvider/types';

function RecipeDetail() {
  const { activeRecipe, requestStatus } = useContext(ActiveRecipeContext);

  return (
    <>
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
            label={activeRecipe.label}
          />
          <Link url={activeRecipe.url}>See more</Link>
        </>
      )}
    </>
  );
}

export default RecipeDetail;
