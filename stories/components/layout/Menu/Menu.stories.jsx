// stories/Menu.stories.js
import React from "react";
import { Menu } from "./Menu";
import { useDarkMode } from "storybook-dark-mode";

export default {
  title: "layout/Menu",
  component: Menu,
};

const Template = (args) => {
  const isDark = useDarkMode(); // hook provided by storybook-dark-mode
  return <Menu {...args} scheme={isDark ? "dark" : "light"} />;
};


export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  status: 'default',
};
