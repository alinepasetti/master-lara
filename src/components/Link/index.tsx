import * as Styled from './styles';

export type LinkProps = {
  children: string;
  url: string;
};

export const Link = ({ children, url }: LinkProps) => {
  return (
    <Styled.Link href={url} target="_blank">
      {children}
    </Styled.Link>
  );
};
