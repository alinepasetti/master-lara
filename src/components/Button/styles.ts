import styled, { css } from 'styled-components';

export const Button = styled.a` ${({ theme }) => css`
  width: 90%;
  display: block;
  padding: 1.6rem;
  font-size: 2.4rem;
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
  border: none;
  margin: 0 auto 2.4rem;
  text-align: center;
  text-decoration: none;
`}`;
