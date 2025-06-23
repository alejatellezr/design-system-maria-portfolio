import React from 'react';
import Chip from './Chip';

export default {
  title: 'UI/Chip',
  component: Chip,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered'
  },
};

const Template = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tag',
  disabled: false,
};
