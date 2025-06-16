import React, { useState } from "react";
import { Search } from "./Search";
import { ArgTypes } from "@storybook/blocks";

export default {
  title: "UI/Search",
  parameters: {
    layout: 'centered',
    pseudo: {
      hover: ['hover'],
    },
  },
  component: Search,
  tags: ["autodocs"],
  ArgTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the search input",
    },
    disabled: {
      control: "boolean",
      description: "Disable the search input",
    },
    status: {
      control: 'radio',
      options: ['default', 'hover', 'disabled', 'error'],
      defaultValue: 'default',
      description: 'Simulate component status',
    },
  },
  args: {
    placeholder: "Search...",
    disabled: false,
    status: "default",
  },
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return <Search {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search here...",
  disabled: false,
  status: "default",
};

export const Hover = Template.bind({});
Hover.args = {
  placeholder: "Hover over me",
  status: "hover",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Custom placeholder text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "Can't type here",
  status: "disabled",
};

export const Error = Template.bind({});
Error.args = {
  disabled: true,
  placeholder: "There is an error",
  status: "error",
};
