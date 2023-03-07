import { Heading } from 'components/Heading';

export type RecipeProps = {
  id: string;
};

function RecipeDetail({ id }: RecipeProps) {
  return (
    <>
      <Heading>Recipe template: {id}</Heading>
    </>
  );
}

export default RecipeDetail;
