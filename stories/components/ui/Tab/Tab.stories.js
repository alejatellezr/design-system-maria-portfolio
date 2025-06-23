// Tab.stories.js
import React from 'react';
import Tab from './Tab';

export default {
  title: 'UI/Tab',
  component: Tab,
  argTypes: {
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    direction: {
      control: 'radio',
      options: ['row', 'column'],
      description: 'Direction of the tab layout',
    },
  },
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tab 1',
  isActive: false,
  disabled: false,
  direction: 'row',
};

export const Column = Template.bind({});
Column.args = {
  label: 'Tab Column',
  isActive: false,
  disabled: false,
  direction: 'column',
};