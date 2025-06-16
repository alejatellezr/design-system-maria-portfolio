import React from "react";
import { Link } from "./Link";

// Optional: If using custom styles, import them here
import "./_link.scss";

export default {
  title: "UI/Link",
  parameters: {
    layout: 'centered',
    pseudo: {
      hover: ['hover'],
    },
  },
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    iconPosition: {
      control: "radio",
      options: ["left", "right","none"],
      description: "Position of the icon relative to the label",
    },
    isExternal: {
      control: "boolean",
    },
    status: {
      control: 'radio',
      options: ['default', 'hover', 'disabled','active'],
      defaultValue: 'default',
      description: 'Simulate component status',
    },
  },
  args: {
    href: "#",
    label: "Link",
    iconName: null,
    iconPosition: "none",
    isExternal: false,
    className: "",
    status: "default",
  },
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  label: "Default Link",
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  href: "#",
  label: "Link with Icon",
  iconName: "IconArrowRight",
  iconPosition: "left",
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  href: "#",
  label: "Link with Icon",
  iconName: "IconArrowRight",
  iconPosition: "right",
};

