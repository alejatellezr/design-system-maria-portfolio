import React, { useState } from 'react';
import RadioButtonGroup from './RadioButtonGroup';

import './_radioButtonGroup.scss';

export default {
  title: 'UI/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      defaultValue: 'right',
    },
    orientation: {
      control: 'radio',
      options: ['row', 'column'],
      defaultValue: 'column',
    },
    disabled: { control: 'boolean' },
  },
};

const options = [
  { label: 'Credit Card', value: 'card' },
  { label: 'PayPal', value: 'paypal' },
  { label: 'Bank Transfer', value: 'bank' },
];

const Template = (args) => {
  const [selected, setSelected] = useState('card');

  return (
    <RadioButtonGroup
      {...args}
      name="payment-method"
      options={options}
      value={selected}
      onChange={setSelected}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  labelPosition: 'right',
  orientation: 'column',
  disabled: false,
};