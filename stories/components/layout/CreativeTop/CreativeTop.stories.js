import React from "react";
import CreativeTop from "./CreativeTop";

import { mockAdvertisers } from "../../../utils/CreativesData";

export default {
  title: "layout/CreativeTop",
  component: CreativeTop,
  argTypes: {
    viewport: {
      control: { type: "radio" },
      options: ["desktop", "mobile"],
    },
  },
};

const Template = (args) => <CreativeTop {...args} />;

export const Default = Template.bind({});
Default.args = {
  topAdvertisers: mockAdvertisers,
  viewport: "desktop",
};

export const MobileView = Template.bind({});
MobileView.args = {
  topAdvertisers: mockAdvertisers,
  viewport: "mobile",
};
