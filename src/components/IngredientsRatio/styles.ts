import styled, { css } from 'styled-components';

export const Container = styled.p`${({ theme }) => css`
  font-size: 1.6rem;
  margin: 0 0;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primaryColor};
  font-size: 1.2rem;
  font-weight: 400;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  border-radius: 8px;
  padding: 1rem;
`}`;
