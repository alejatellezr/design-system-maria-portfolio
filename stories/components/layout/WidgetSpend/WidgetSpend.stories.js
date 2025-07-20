import React from "react";
import WidgetSpend from "./WidgetSpend";

export default {
  title: "layout/WidgetSpend",
  component: WidgetSpend,
};

const Template = (args) => <WidgetSpend {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Spend",
};

export const WithProspects = Template.bind({});
WithProspects.args = {
  title: "Spend",
};
