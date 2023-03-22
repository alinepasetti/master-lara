import { memo } from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode | string;
};

const Heading = (props: HeadingProps) => {
  return <Styled.Title>{props.children}</Styled.Title>;
};

export default memo(Heading);
