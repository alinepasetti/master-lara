import { memo, useContext, useCallback } from 'react';
import * as Styled from './styles';
import Link from 'next/link';
import { RecipesContext } from '../../contexts/RecipesProvider/context';
import { PantryContext } from '../../contexts/PantryProvider/context';

const NavBar = () => {
  const { resetState: resetRecipesState } = useContext(RecipesContext);
  const { resetState: resetPantryState } = useContext(PantryContext);

  const resetAppState = useCallback(() => {
    resetRecipesState();
    resetPantryState();
  }, [resetRecipesState, resetPantryState]);

  return (
    <Styled.NavBar>
      <Link href="">
        <Styled.Image
          onClick={resetAppState}
          src="./assets/logo.png"
          alt="Master Lara"
        />
      </Link>
    </Styled.NavBar>
  );
};

export default memo(NavBar);
