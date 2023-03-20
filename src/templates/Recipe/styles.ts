import { Link as WhatsappButton } from 'components/Link/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`

  & > ${WhatsappButton} {
    background-color: ${({ theme }) => theme.colors.green};
    width: 100%;
    position: sticky;
    bottom: 0;
    margin-bottom: 0;
    & > svg {
      width: 2.5rem;
    }
  }
`;
