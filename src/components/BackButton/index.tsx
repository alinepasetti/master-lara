import * as Styled from './styles';
import { useRouter } from 'next/router';

export const BackButton = () => {
  const router = useRouter();
  const getBack =
    window.history.state && window.history.state.idx > 0
      ? () => router.back()
      : () => router.push('/');
  return <Styled.Back onClick={getBack}>BiArrowBack</Styled.Back>;
};
