import { Meta, Story } from '@storybook/react/types-6-0';
import { Recipes } from '.';

export default {
  title: 'Recipes',
  component: Recipes,
} as Meta;

export const Template: Story = () => <Recipes />;
