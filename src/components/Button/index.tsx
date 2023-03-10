import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode | string;
  clickHandler: () => void;
};

export const Button = ({ children, clickHandler }: ButtonProps) => {
  return (
    <Styled.Button onClick={() => clickHandler()}>{children}</Styled.Button>
  );
};
