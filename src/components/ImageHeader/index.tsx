import * as Styled from './styles';

export type ImageHeaderProps = {
  srcImage: string;
  text: string;
};

export const ImageHeader = ({ srcImage, text }: ImageHeaderProps) => {
  return <Styled.Image src={srcImage} alt={text} />;
};
