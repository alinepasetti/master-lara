import useActiveRecipe from 'hooks/useActiveRecipe';
import { ActiveRecipeContext } from './context';

export type ActiveRecipeProviderProps = {
  children: React.ReactNode;
  id: string;
};

export const ActiveRecipeProvider = ({
  children,
  id,
}: ActiveRecipeProviderProps) => {
  const { activeRecipe } = useActiveRecipe(id);
  return (
    <ActiveRecipeContext.Provider
      value={{
        activeRecipe,
      }}
    >
      {children}
    </ActiveRecipeContext.Provider>
  );
};
