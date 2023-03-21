import styled from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 2em auto 0;
  text-decoration: none;
  ${Heading} {
    color: ${({ theme }) => theme.colors.secondaryColor};
    font-size: 2rem;
    margin: 0 0;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 35vh;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;
`;

export const Tag = styled.h3`
  font-size: 1.6rem;
  margin: 0 0;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-weight: 400;
  display: flex;
  align-items: center;
  &> svg {
    margin-right: 0.5rem;
  }
`;
