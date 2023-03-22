import styled, { css } from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';

export const Container = styled.ul`
  padding: 2.4rem;
  padding-top: 0;
  margin: 0;
  > a {
    margin-top: 1.6rem;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

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
