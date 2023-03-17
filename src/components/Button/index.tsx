import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode | string;
  clickHandler: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  clickHandler,
  disabled = false,
}: ButtonProps) => {
  return (
    <Styled.Button onClick={() => clickHandler()} disabled={disabled}>
      {children}
    </Styled.Button>
  );
};
