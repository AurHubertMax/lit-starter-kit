import { StoryObj } from '@storybook/web-components';
import { getWcStorybookHelpers } from 'wc-storybook-helpers';
import type { MyCopyButton } from './index.js';

const { args, argTypes, events, template } = getWcStorybookHelpers('my-copy-button');

export default {
  title: 'Components/CopyButton',
  component: 'my-copy-button',
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};


type Story = StoryObj<MyCopyButton & typeof args>;

export const Default: Story = {
  render: args => template(args),
  args: {}
};
