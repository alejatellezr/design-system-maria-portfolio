import React, { useState } from 'react';
import { Dropdown } from './Dropdown/Dropdown';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    pseudo: {
      hover: ['hover'],
    },
  },
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Label',
    },
    options: {
      control: 'object',
    },
    selected: {
      control: 'select',
      options: ['01', '02', '03'], // match actual option values
    },
    status: {
      control: 'radio',
      options: ['default', 'hover', 'disabled','active'],
      defaultValue: 'default',
      description: 'Simulate component status',
    },
    direction: {
      control: 'radio',
      options: ['column', 'row'],
      defaultValue: 'column',
      description: 'Direction of the dropdown menu',
    },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.selected);

  return (
    <Dropdown
      {...args}
      selected={selected}
      onChange={(val) => {
        setSelected(val);
        args.onChange(val); // for Storybook action logger
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label',
  selected: '01',
  options: [
    { value: '01', label: 'Option 1' },
    { value: '02', label: 'Option 2' },
    { value: '03', label: 'Option 3' },
  ],
  status: 'default',
  direction: 'column',
};