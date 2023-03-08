import { Meta, Story } from '@storybook/react/types-6-0';
import { RecipeSteps, RecipeStepsProps } from '.';

export default {
  title: 'RecipeSteps',
  component: RecipeSteps,
  args: {
    recipe: {},
  },
} as Meta;

export const Template: Story<RecipeStepsProps> = (args) => (
  <RecipeSteps {...args} />
);
