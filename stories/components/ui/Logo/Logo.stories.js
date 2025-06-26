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
  const isDark = useDarkMode?.();
  const resolvedTheme = args.theme ?? (isDark ? 'dark' : 'light');
  return <Logo {...args} theme={resolvedTheme} />;
};

export const AutoTheme = Template.bind({});
AutoTheme.args = {
  type: 'logotype',
  width: 120,
  height: 40,
};
export const LogotypeDark = Template.bind({});
LogotypeDark.args = {
  type: 'logotype',
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
