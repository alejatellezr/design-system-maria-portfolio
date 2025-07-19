import React from "react";
import ChartLegend from "./ChartLegend";

import {
  legendDataProspects,
} from "../../../utils/ChartLineData";


export default {
  title: "UI/ChartLegend",
  component: ChartLegend,
};


const Template = (args) => <ChartLegend {...args} />;

export const Default = Template.bind({});
Default.args = {
  legendData: legendDataProspects,
};
