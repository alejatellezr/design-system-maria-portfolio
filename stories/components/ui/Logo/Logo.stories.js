// Logo.stories.js
import React from 'react';
import { Logo } from './Logo';
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: 'UI/Logo',
  component: Logo,
  argTypes: {
    type: {
      control: 'radio',
      options: ['logo', 'logotype'],
    },
    width: { control: { type: 'number', min: 40, max: 300, step: 10 } },
    height: { control: { type: 'number', min: 20, max: 100, step: 5 } },
  },
};

const Template = (args) => {
  return <Logo {...args}/>;
};

export const Logotype = Template.bind({});
Logotype.args = {
  type: 'logotype',
  width: 200,
  height: 40,
};

export const LogoOnly = Template.bind({});
LogoOnly.args = {
  type: 'logo',
  width: 40,
  height: 40,
};
