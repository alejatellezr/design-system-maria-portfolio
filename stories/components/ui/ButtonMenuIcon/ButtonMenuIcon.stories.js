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
    iconOnly:{
      control: 'boolean',
      description: 'If true, only the icon will be displayed without label',
    },
    style: {
      control: 'select',
      options: ['primary', 'secondary'],
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
    iconName: 'IconBellFilled',
    iconOnly: true,
    visualOnly: 'icon',
    style: 'primary',
   },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid = {
  args: {
    primary: true,
    label: 'Button',
    style:'primary',
    status: 'active',
  },
};


export const ImageIcon = {
  args: {
    label: 'Profile',
    visualOnly: 'image',
    status: 'primary',
    showIcon: false,
    iconImage: 'https://i0.wp.com/www.mariaalejandratellez.com/wp-content/uploads/2025/04/maria-alejandra-tellez-portfolio-image.jpg'
  },
};

export const SolidSecondary = {
  args: {
    primary: true,
    label: 'Button',
    style:'secondary',
    status: 'active',
  },
};


export const ImageIconSecondary = {
  args: {
    label: 'Profile',
    visualOnly: 'image',
    style: 'secondary',
    showIcon: false,
    iconImage: 'https://i0.wp.com/www.mariaalejandratellez.com/wp-content/uploads/2025/04/maria-alejandra-tellez-portfolio-image.jpg'
  },
};
