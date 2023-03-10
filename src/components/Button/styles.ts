import styled, { css } from 'styled-components';

export const Button = styled.button`${({ theme }) => css`
  padding: 1.6rem;
  font-size: 1.6rem;
  font-weight: 700;
  background: ${theme.colors.secondaryColor};
  color: ${theme.colors.white};
  border: none;
  margin: 0 auto;
  letter-spacing: 0.5px;
`}`;
