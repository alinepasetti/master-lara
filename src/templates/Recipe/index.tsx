import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { ImageHeader } from 'components/ImageHeader';
import { RecipeInfo } from 'components/RecipeInfo';
import { RecipeSteps } from 'components/RecipeSteps';
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
          />
          <Button url={activeRecipe.url}>See more</Button>
          <RecipeSteps ingredientLines={activeRecipe.ingredientLines} />
        </>
      )}
    </>
  );
}

export default RecipeDetail;
