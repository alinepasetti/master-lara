import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode | string;
  clickHandler: (event) => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  clickHandler,
  disabled = false,
}: ButtonProps) => {
  return (
    <Styled.Button onClick={(event) => clickHandler(event)} disabled={disabled}>
      {children}
    </Styled.Button>
  );
};
