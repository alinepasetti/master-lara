import styled from 'styled-components';
import { Button as SearchButton } from '../Button/styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${SearchButton} {
    border-radius: 8px;
    width: 10.8rem;
  }
`;
