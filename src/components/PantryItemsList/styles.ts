import styled, { css } from 'styled-components';

type HasIngredient = {
  hasIngredient?: boolean;
};

export const Container = styled.ul`
  height: 100%;
  width: 100%;
  min-height: 4.0rem;
  padding: 0 0.8rem;
  margin: 1.6rem 0;
  display: flex;
  justify-content: space-around;
  flex: 1;
  flex-wrap: wrap;
  list-style: none;
`;

export const PantryItem = styled.li<HasIngredient>`${({ theme }) => css`
  color: ${theme.colors.primaryColor};
  background-color: ${theme.colors.white};
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

  @media screen and (min-width: 768px) {
    width: 31.5%;
  }

  @media screen and (min-width: 1164px) {
    width: 23%;
  }
`}`;

export const Message = styled.p`${({ theme }) => css`
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  margin: 0.8rem 0;
  color: ${theme.colors.primaryColor};
`}`;
