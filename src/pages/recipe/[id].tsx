import { ActiveRecipeProvider } from 'contexts/ActiveRecipe';
import { useRouter } from 'next/router';
import RecipeDetail from 'templates/Recipe';

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ActiveRecipeProvider id={id as string}>
      <RecipeDetail />
    </ActiveRecipeProvider>
  );
};

export default Recipe;
