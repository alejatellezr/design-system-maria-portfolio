import { fn } from '@storybook/test';

import { ButtonMenuIcon } from './ButtonMenuIcon';


export default {
  title: 'UI/ButtonMenuIcon',
  component: ButtonMenuIcon,
  parameters: {
    layout: 'centered',
    pseudo: {
      hover: ['hover'], // Enable hover simulation
    },
  },
  //tags: ['autodocs'],

  argTypes: {
    iconName: {
      control: 'text',
      description: 'Name of the Tabler icon, e.g. IconUser or IconHome',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    iconOnly:{
      control: 'boolean',
      description: 'If true, only the icon will be displayed without label',
    },
    style: {
      control: 'select',
      options: ['solid', 'outline', 'flat'],
    },
    status: {
      control: 'radio',
      options: ['default', 'hover', 'disabled', 'active'],
      description: 'Simulate button status',
    },

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onClick: fn(),
    status: 'default',
    label: 'Button',
    iconPosition: 'left',
    iconName: 'IconBellFilled',
    iconOnly: true,
    style: 'solid',
   },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid = {
  args: {
    primary: true,
    label: 'Button',
    style:'solid',
    status: 'default',
  },
};

export const Outline = {
  args: {
    label: 'Button',
    style:'outline',
    status: 'default',
  },
};

export const Flat = {
  args: {
    label: 'Button',
    style:'flat',
    status: 'default',
  },
};


export const RightIcon = {
  args: {
    label: 'Next',
    iconName: 'IconArrowRight',
    iconPosition: 'right',
    status: 'default',
  },
};

export const LeftIcon = {
  args: {
    label: 'Back',
    iconName: 'IconArrowLeft',
    iconPosition: 'left',
    status: 'default',
  },
};

export const OnlyIcon = {
  args: {
    iconPosition: 'left',
    status: 'default',
    iconOnly: true,
  },
};

