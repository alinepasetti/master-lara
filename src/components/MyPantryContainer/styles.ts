import styled, { css } from 'styled-components';
import { Button as SearchButton } from '../Button/styles';
import { Title as Heading } from 'components/Heading/styles';

export const Container = styled.div`${({ theme }) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(22, 66, 108, 0.3);
  border-radius: 8px;
  padding: 1.6rem 0;

  ${Heading} {
    color: ${theme.colors.secondaryColor};
    text-shadow: -1px -1px 1px ${theme.colors.secondaryColor},
      1px 1px 1px ${theme.colors.mediumGray};
  }

  ${SearchButton} {
    border-radius: 8px;
    width: 10.8rem;
    cursor: pointer;

    &:disabled {
      color: gray;
      background-color: ${theme.colors.mediumGray};
      cursor: default;
    }
  }
`}`;
