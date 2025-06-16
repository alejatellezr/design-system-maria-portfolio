// Switch.stories.js
import React, { useState } from 'react';
import Switch from './Switch';
import './_switch.scss';

export default {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
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
    <Switch
      {...args}
      checked={isChecked}
      onChange={(val) => setIsChecked(val)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: 'Enable notifications',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  label: 'Disabled switch',
  disabled: true,
};

export const LabelLeft = Template.bind({});
LabelLeft.args = {
  checked: true,
  label: 'Auto sync',
  labelPosition: 'left',
};
