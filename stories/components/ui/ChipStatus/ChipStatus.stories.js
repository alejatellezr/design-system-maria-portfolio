import React from 'react';
import ChipStatus from './ChipStatus';

export default {
  title: 'UI/ChipStatus',
  component: ChipStatus,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label',
    },
    type: {
      control: 'radio',
      defaultValue: 'owned',
      options: ['owned', 'competitor', 'prospective'],
      description: 'Simulate component status',
    },
  },
};

const Template = (args) => <ChipStatus {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Owned',
  type: 'owned',
};
