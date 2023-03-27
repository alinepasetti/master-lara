import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode | string;
  disabled?: boolean;
  clickHandler: () => void;
  touchStartHandler?: (event) => void;
};

export const Button = ({
  children,
  clickHandler,
  disabled = false,
  touchStartHandler,
}: ButtonProps) => {
  return (
    <Styled.Button
      onTouchStart={touchStartHandler}
      onTouchEnd={touchStartHandler}
      onTouchMove={touchStartHandler}
      onClick={() => clickHandler()}
      disabled={disabled}
    >
      {children}
    </Styled.Button>
  );
};
