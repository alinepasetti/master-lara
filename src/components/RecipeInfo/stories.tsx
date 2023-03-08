import { Meta, Story } from '@storybook/react/types-6-0';
import { RecipeInfo, RecipeInfoProps } from '.';

export default {
  title: 'RecipeInfo',
  component: RecipeInfo,
  args: {
    recipe: {},
  },
} as Meta;

export const Template: Story<RecipeInfoProps> = (args) => (
  <RecipeInfo {...args} />
);
