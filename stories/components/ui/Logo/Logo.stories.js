// Logo.stories.js
import React from 'react';
import { Logo } from './Logo';

export default {
  title: 'UI/Logo',
  component: Logo,
  argTypes: {
    type: {
      control: 'radio',
      options: ['logo', 'logotype'],
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    width: { control: { type: 'number', min: 40, max: 300, step: 10 } },
    height: { control: { type: 'number', min: 20, max: 100, step: 5 } },
  },
};

const Template = (args) => <Logo {...args} />;

export const LogotypeDark = Template.bind({});
LogotypeDark.args = {
  type: 'logotype',
  theme: 'dark',
  width: 200,
  height: 40,
};

export const LogotypeLight = Template.bind({});
LogotypeLight.args = {
  type: 'logotype',
  theme: 'light',
  width: 200,
  height: 40,
};

export const LogoOnlyDark = Template.bind({});
LogoOnlyDark.args = {
  type: 'logo',
  theme: 'dark',
  width: 40,
  height: 40,
};

export const LogoOnlyLight = Template.bind({});
LogoOnlyLight.args = {
  type: 'logo',
  theme: 'light',
  width: 40,
  height: 40,
};
