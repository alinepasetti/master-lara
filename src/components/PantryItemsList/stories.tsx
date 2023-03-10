import { Meta, Story } from '@storybook/react/types-6-0';
import { PantryItemsList } from '.';

export default {
  title: 'PantryItemsList',
  component: PantryItemsList,
} as Meta;

export const Template: Story = () => <PantryItemsList />;
