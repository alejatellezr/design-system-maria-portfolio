import { fn } from '@storybook/test';

import { BroadcastMessage } from './BroadcastMessage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'UI/BroadcastMessage',
  component: BroadcastMessage,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'error'],
      description: 'Style of the Broadcast Message, e.g. neutral, informative, warning, error',
    },

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onClick: fn(),
    messageTitle: 'Information',
    messageText: 'This is an informative message.',
   },
};

export const Success = {
  args: {
    style:'success',
    messageTitle: 'Success',
    messageText: 'This is an informative message.',
  },
};

export const Error = {
  args: {
    style:'error',
    messageTitle: 'Error',
    messageText: 'This is an informative message.',
  },
};

export const Warning = {
  args: {
    style:'warning',
    messageTitle: 'Warning',
    messageText: 'This is an informative message.',
  },
};

export const Neutral = {
  args: {
    style:'neutral',
    messageTitle: 'Information',
    messageText: 'This is an informative message.',
  },
};