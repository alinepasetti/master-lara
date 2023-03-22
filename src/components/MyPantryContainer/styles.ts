import styled, { css } from 'styled-components';
import { Button as SearchButton } from '../Button/styles';
import { Title as Heading } from 'components/Heading/styles';

export const Container = styled.div`${({ theme }) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.secondaryColor};
  border-radius: 8px;
  padding: 1.6rem 0;

  ${Heading} {
    font-size: 2.4rem;
    color: ${theme.colors.primaryColor};
  }

  ${SearchButton} {
    border-radius: 8px;
    width: 10.8rem;
    cursor: pointer;
    background-color: ${theme.colors.primaryColor};

    &:disabled {
      color: ${theme.colors.mediumGray};
      background-color: ${theme.colors.lightGray};
      cursor: default;
    }
  }
`}`;
