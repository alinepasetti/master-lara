import { Title as Message } from 'components/Heading/styles';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 2.4rem;
  &> ${Message} {
    text-align: center;
    margin: 0 2.4rem;
`;
