// RadioButton.stories.js
import React, { useState } from 'react';
import RadioButton from './RadioButton';
import './_radioButton.scss';

export default {
  title: 'UI/RadioButton',
  component: RadioButton,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    labelPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      defaultValue: 'right',
    },
    name: { control: 'text' },
    value: { control: 'text' },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.checked ? args.value : '');

  return (
    <RadioButton
      {...args}
      checked={selected === args.value}
      onChange={(val) => setSelected(val)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  name: 'group1',
  value: 'option1',
  label: 'Option 1',
  labelPosition: 'right',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  name: 'group1',
  value: 'option2',
  label: 'Disabled option',
  labelPosition: 'right',
  disabled: true,
};
