import { Meta, Story } from '@storybook/react/types-6-0';
import { IngredientsRatio, IngredientsRatioProps } from '../IngredientsRatio';

export default {
  title: 'IngredientsRatio',
  component: IngredientsRatio,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<IngredientsRatioProps> = (args) => (
  <IngredientsRatio {...args} />
);
