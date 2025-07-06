import React, { useState, useEffect } from 'react';
import Checkbox from "./Checkbox";
import "./_checkbox.scss";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    labelPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
      defaultValue: "right",
    },
  },
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);
  const [isIndeterminate, setIsIndeterminate] = useState(args.indeterminate);

  useEffect(() => {
    setIsChecked(args.checked);
  }, [args.checked]);

  useEffect(() => {
    setIsIndeterminate(args.indeterminate);
  }, [args.indeterminate]);

  const handleChange = (checked) => {
    setIsChecked(checked);
    setIsIndeterminate(false);
  };
  return (
    <Checkbox
      {...args}
      checked={isChecked}
      indeterminate={isIndeterminate}
      onChange={handleChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  indeterminate: false,
  label: "Accept terms",
  labelPosition: "right",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: true,
  indeterminate: false,
  label: "Disabled checkbox",
  labelPosition: "right",
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  checked: false,
  indeterminate: true,
  label: "Partially selected",
  labelPosition: "right",
  disabled: false,
};
