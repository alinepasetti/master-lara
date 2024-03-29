import { Image as ImageHeader } from 'components/ImageHeader/styles';
import { Link as WhatsappButton } from 'components/Link/styles';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 auto;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;

  ${ImageHeader} {
    @media screen and (min-width: 768px) {
      height: 60vh;
    }
  }
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
