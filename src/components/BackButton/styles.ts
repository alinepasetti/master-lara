import styled, { css } from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

export const Back = styled(BiArrowBack)`${({ theme }) => css`
  width: 40px;
  height: 40px;
  color: ${theme.colors.mediumGray};
  background-color: ${theme.colors.white};
  font-size: 0.8rem;
  border-radius: 50%;
  padding: 0.7rem;
  position: absolute;
  left: 1.6rem;
  top: 1.6rem;
`}`;
