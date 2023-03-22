import { memo } from 'react';
import * as Styled from './styles';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Styled.NavBar>
      <Link href="">
        <Styled.Image src="./assets/logo.png" alt="Master Lara" />
      </Link>
    </Styled.NavBar>
  );
};

export default memo(NavBar);
