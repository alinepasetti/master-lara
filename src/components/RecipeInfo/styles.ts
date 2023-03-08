import styled from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`

  padding: 1.6rem

  ${Heading} {
    font-size: 1.6rem;
    margin: 0 0;
  }
`;

export const Tag = styled.h3`
  font-size: 1.6rem;
  margin: 0 0;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-weight: 400;
`;
