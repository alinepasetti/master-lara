import * as Styled from './styles';

export type ImageHeaderProps = {
  srcImage: string;
  text: string;
};

export const ImageHeader = ({ srcImage, text }: ImageHeaderProps) => {
  return <Styled.Container src={srcImage} alt={text} />;
};
