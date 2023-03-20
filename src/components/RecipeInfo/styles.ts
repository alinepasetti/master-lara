import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.4rem;
  position: relative;
`;

export const Tag = styled.h3`
  font-size: 1.6rem;
  margin: 0 0;
  color: ${({ theme }) => theme.colors.mediumGray};
  font-weight: 400;
  `;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  margin: 2.4rem auto 0 auto;
  width: 98%;
`;
