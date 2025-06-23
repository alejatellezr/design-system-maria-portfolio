import React, { useState } from "react";
import MultiSelect from "./MultiSelect";

export default {
  title: "UI/MultiSelect",
  component: MultiSelect,
  argTypes: {
    status: {
      control: "select",
      options: ["default", "active", "disabled", "error", "informative"],
    },
    placeholder: { control: "text" },
    label: { control: "text" },
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

const allOptions = ["Apples", "Oranges", "Bananas", "Grapes", "Peaches"];

const Template = (args) => {
  const [selected, setSelected] = useState(["Apples"]);

  return (
    <MultiSelect
      {...args}
      options={allOptions}
      selected={selected}
      onChange={setSelected}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Fruits",
  placeholder: "Select fruits",
  status: "default",
  orientation: "column",
  message: "Select at least one item from the list",
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  status: "default",
  message: "Select at least one item from the list",
  options: ["Dog", "Cat", "Bird"],
  selected: [],
};
