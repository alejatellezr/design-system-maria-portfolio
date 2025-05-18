import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  iconName: {
    control: 'text',
    description: 'Name of the Tabler icon, e.g. IconUser or IconHome',
  },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid = {
  args: {
    primary: true,
    label: 'Button',
    style:'solid',
  },
};

export const Outline = {
  args: {
    label: 'Button',
    style:'outline',
  },
};

export const Flat = {
  args: {
    label: 'Button',
    style:'flat',
  },
};


export const RightIcon = {
  args: {
    label: 'Next',
    iconName: 'IconArrowRight',
    iconPosition: 'right',
  },
};

export const LeftIcon = {
  args: {
    label: 'Back',
    iconName: 'IconArrowLeft',
    iconPosition: 'left',
  },
};