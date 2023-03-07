import { Heading } from 'components/Heading';
import { ImageHeader } from 'components/ImageHeader';
import { ActiveRecipeContext } from 'contexts/ActiveRecipe/context';
import { useContext } from 'react';

export type RecipeProps = {
  id: string;
};

function RecipeDetail({ id }: RecipeProps) {
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
          <Heading>Recipe template: {id}</Heading>
        </>
      )}
    </>
  );
}

export default RecipeDetail;
