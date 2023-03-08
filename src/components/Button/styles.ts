import styled, { css } from 'styled-components';

export const Button = styled.a` ${({ theme }) => css`
  display: block;
  padding: 1.6rem;
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
  border: none;
  margin: 0 auto;
`}`;
