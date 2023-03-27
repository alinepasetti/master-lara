import styled, { css } from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';

type HasIngredient = {
  hasIngredient: boolean;
};

const uncheckIconUrl = (theme) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23${theme.colors.secondaryColor.substring(
    1,
  )}' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E")`;

const checkIconUrl = (theme) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='%23${theme.colors.green.substring(
    1,
  )}' class='w-6 h-6'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E%0A")`;

export const Container = styled.ul`
  padding: 2.4rem;
  padding-top: 0;
  margin: 0;

  &> a {
    margin-top: 1.6rem;
  }
`;

export const ListItem = styled.li<HasIngredient>`${({
  theme,
  hasIngredient,
}) => css`
  list-style: none;

  &::before {
    display: inline-block;
    content: ${hasIngredient ? checkIconUrl(theme) : uncheckIconUrl(theme)};
    width: 1.8rem;
    padding-right: 1rem;
}
`}`;

export const CheckIcon = styled(AiFillCheckCircle)`${({ theme }) => css`
  color: ${theme.colors.green};
  margin-right: 2.4rem;
  height: 2.4rem;
  width: 2.4rem;
`}`;

export const UncheckIcon = styled(AiFillCloseCircle)`${({ theme }) => css`
  color: ${theme.colors.secondaryColor};
  margin-right: 2.4rem;
  height: 2.4rem;
  width: 2.4rem;
`}`;
