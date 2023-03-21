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
  }
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid #c6c9cd;
  margin: 2.4rem auto 0 auto;
  width: 89%;
`;
