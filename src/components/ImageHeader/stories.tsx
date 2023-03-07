import { Meta, Story } from '@storybook/react/types-6-0';
import { ImageHeader, ImageHeaderProps } from '.';

export default {
  title: 'ImageHeader',
  component: ImageHeader,
  args: {
    srcImage: 'assets/images/cat_logo.png',
    text: 'LogoLink',
  },
  argTypes: {
    srcImage: { type: 'string' },
    text: { type: 'string' },
  },
} as Meta;

export const Template: Story<ImageHeaderProps> = (args) => (
  <ImageHeader {...args} />
);
