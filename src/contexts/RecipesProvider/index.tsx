import useRecipes from 'hooks/useRecipes';
import { RecipesContext } from './context';

export type RecipesProviderProps = {
  children: React.ReactNode;
};

export const RecipesProvider = ({ children }: RecipesProviderProps) => {
  const { requestStatus, recipes, searchedIngredients } = useRecipes();
  return (
    <RecipesContext.Provider
      value={{ recipes, searchedIngredients, requestStatus }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
