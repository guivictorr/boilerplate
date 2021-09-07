import HelloWorld from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld
} as Meta;

export const Basic: Story<{ title: string }> = args => <HelloWorld {...args} />;
Basic.args = {
  title: 'Hello storybook'
};
