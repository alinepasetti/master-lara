import styled, { css } from 'styled-components';

type HasIngredient = {
  hasIngredient?: boolean;
};

export const Container = styled.ul`
  width: 100%;
  min-height: 4.0rem;
  background: rgba(22, 66, 108, 0.3);
  border-radius: 8px;
  padding: 0.8rem;
  margin: 1.6rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
`;

export const PantryItem = styled.li<HasIngredient>`${({ theme }) => css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.mediumGray};
  padding: 1.25rem;
  width: 47%;
  border-radius: 8px;
  margin: 0.8rem 0;
  & > span {
    display: flex;
    justify-content: space-between;
  }
  & > span > svg {
    width: 2.5rem;
  }
`}`;

export const Message = styled.p`${({ theme }) => css`
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  margin: 0.8rem 0;
  color: ${theme.colors.secondaryColor};
`}`;
