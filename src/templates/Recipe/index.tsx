import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { ImageHeader } from 'components/ImageHeader';
import { RecipeInfo } from 'components/RecipeInfo';
import { IngredientsList } from 'components/IngredientsList';
import { ActiveRecipeContext } from 'contexts/ActiveRecipe/context';
import { useContext } from 'react';

function RecipeDetail() {
  const { activeRecipe } = useContext(ActiveRecipeContext);
  return (
    <>
      {!activeRecipe && <Heading>LOADING...</Heading>}
      {activeRecipe && (
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
          <Button url={activeRecipe.url}>See more</Button>
        </>
      )}
    </>
  );
}

export default RecipeDetail;
