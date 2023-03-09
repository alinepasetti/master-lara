import { Meta, Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '.';

export default {
  title: 'Link',
  component: Link,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<LinkProps> = (args) => <Link {...args} />;
