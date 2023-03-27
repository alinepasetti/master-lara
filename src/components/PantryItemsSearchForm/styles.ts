import styled from 'styled-components';
import { Button as AddPantryItemButton } from '../Button/styles';

export const Container = styled.form`
  width: 100%;
  position:relative;
  margin-bottom: 1.6rem;

  ${AddPantryItemButton} {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.8rem;
    border-radius: 50%;
    padding: 0.7rem;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0 0 5px hsl(0 0% 78%);
  height: 55px;
  border-radius: 100vw;
  padding: 0.8rem 1.5rem;
  transition: background 250ms ease;

  &:hover {
    background: hsl(0 0% 94%);
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  height: 100%;

  &::placeholder {
    font-size: 1.6rem;
  }

  &:hover::before {
    background: transparent;
  }

  &[type="text"] {
    background: none;
    border: none;
    padding: 0.2rem 0 0 0;
  }

  &[type="text"]:focus {
    outline:none;
  }
`;
