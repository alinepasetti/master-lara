import styled from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 2em auto;

  ${Heading} {
    font-size: 1.6rem;
    margin: ${({ theme }) => theme.spacings.small} 0;
    margin: 0 0;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 35vh;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;
`;

export const Title = styled.h1`
font-size: 1.6rem;
margin: ${({ theme }) => theme.spacings.small} 0;
margin: 0 0;

`;

export const Tag = styled.h3`
  font-size: 1.6rem;
  margin: 0 0;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-weight: 400;
`;
