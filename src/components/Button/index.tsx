import * as Styled from './styles';

export type ButtonProps = {
  children: string;
  url: string;
};

export const Button = ({ children, url }: ButtonProps) => {
  return <Styled.Button href={url}>{children}</Styled.Button>;
};
