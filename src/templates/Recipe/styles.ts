import { Link as WhatsappButton } from 'components/Link/styles';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  background-color: white;
  padding: 1.6rem;
  width: 100%;
  bottom: 0;
  margin-bottom: 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  & > ${WhatsappButton} {
    background-color: ${({ theme }) => theme.colors.green};
    width: 100%;
    & > svg {
      width: 2.5rem;
    }
  }
`;
