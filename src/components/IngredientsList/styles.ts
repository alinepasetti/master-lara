import styled, { css } from 'styled-components';

type HasIngredient = {
  hasIngredient?: boolean;
};

export const Container = styled.ul`
  padding: 2.4rem;
  padding-top: 0;
  margin: 0;
`;

export const ListItem = styled.li<HasIngredient>`${({
  theme,
  hasIngredient,
}) => css`
  color: ${hasIngredient ? theme.colors.green : theme.colors.primaryColor};
  margin-left: 2.4rem;
`}`;
