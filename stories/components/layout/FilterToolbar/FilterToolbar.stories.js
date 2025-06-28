import React from "react";
import { FilterToolbar } from "./FilterToolbar";

export default {
  title: "layout/FilterToolbar",
  component: FilterToolbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  render: () => <FilterToolbar />,
};
