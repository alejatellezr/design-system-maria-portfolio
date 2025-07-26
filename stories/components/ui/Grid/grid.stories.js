import React from "react";
import Grid from "./Grid";
import ChipStatus from "../ChipStatus/ChipStatus";
import {GridAccountsColumns, GridAccountsData} from "../../../utils/FilterToolbarData";
export default {
  title: "UI/Grid",
  component: Grid,
};


const Template = (args) => <Grid {...args} />;

export const WithChips = Template.bind({});
WithChips.args = {
  GridAccountsColumns,
  GridAccountsData,
  showFilters: true,
};
