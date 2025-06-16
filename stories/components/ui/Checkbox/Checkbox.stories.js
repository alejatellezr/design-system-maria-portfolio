// Checkbox.stories.js
import React, { useState } from 'react';
import Checkbox from './Checkbox';
import './_checkbox.scss';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    labelPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      defaultValue: 'right',
    },
  },
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onChange={setIsChecked}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: 'Accept terms',
  labelPosition: 'right',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  label: 'Disabled checkbox',
  disabled: true,
};
