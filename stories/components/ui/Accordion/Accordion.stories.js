import React, { useState } from 'react';
import { Accordion } from './Accordion';

export default {
  title: 'UI/Accordion',
  component: Accordion,
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
    status: {
      control: 'radio',
      options: ['default', 'hover', 'disabled'],
      description: 'Simulate component status',
    },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.selected);

  return (
    <Accordion
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
  status: 'default',
};