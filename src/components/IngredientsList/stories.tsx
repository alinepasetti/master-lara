import { Meta, Story } from '@storybook/react/types-6-0';
import { IngredientsList, IngredientsListProps } from '.';

export default {
  title: 'IngredientsList',
  component: IngredientsList,
  args: {
    recipe: {},
  },
} as Meta;

export const Template: Story<IngredientsListProps> = (args) => (
  <IngredientsList {...args} />
);
