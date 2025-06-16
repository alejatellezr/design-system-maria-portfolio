
import React, { useState } from 'react';
import CheckboxGroup from './CheckboxGroup';
import './_checkboxGroup.scss';

export default {
  title: 'UI/CheckboxGroup',
  component: CheckboxGroup,
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
  { label: 'Apples', value: 'apple' },
  { label: 'Bananas', value: 'banana' },
  { label: 'Oranges', value: 'orange' },
];

const Template = (args) => {
  const [selected, setSelected] = useState(['banana']);

  return (
    <CheckboxGroup
      {...args}
      options={options}
      values={selected}
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