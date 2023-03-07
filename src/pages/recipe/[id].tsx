import { useRouter } from 'next/router';
import RecipeDetail from 'templates/Recipe';

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;

  return <RecipeDetail id={id as string} />;
};

export default Recipe;
