// Textfield.stories.js
import React, { useState } from 'react';
import Textfield from './Textfield';


export default {
  title: 'UI/Textfield',
  component: Textfield,
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'active', 'disabled', 'error', 'informative'],
      defaultValue: 'default',
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    orientation: {
      control: "radio",
      options: ["row", "column"],
      defaultValue: "column",
    },
    message: {
      control: "text",
      description: "General message text for error or informative states",
    },
  },
};

const Template = (args) => {
  const [text, setText] = useState('');

  return <Textfield {...args} value={text} onChange={setText} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  status: 'default',
  orientation: "column",
  message: 'This field has an error',
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  status: "informative",
  label: 'Name',
  placeholder: 'Enter your name',
  message: "Select at least one item from the list",
  orientation: "row",
};
