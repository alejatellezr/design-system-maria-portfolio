import React from "react";
import ChartLegend from "./ChartLegend";
import { getGraphColors, getChartColors } from "../../../utils/themeColors";

const colors = getGraphColors();
const surfaceColor = getChartColors()[2];
const textColor = getChartColors()[1];
const borderDash = [12, 8];

export default {
  title: "UI/ChartLegend",
  component: ChartLegend,
};

const legendData = [
  {
    label: "OWNED",
    style:"cube",
    borderColor: colors[0],
    backgroundColor: surfaceColor,
    fill: false,
  },
  {
    label: "PROSPECTS",
    style:"cube",
    borderColor: colors[1],
    backgroundColor: surfaceColor,
    fill: false,
  },
  {
    label: "POTENTIAL PROSPECTS",
    style:"cube",
    borderColor: colors[2],
    backgroundColor: surfaceColor,
    fill: false,
  },
  {
    label: "PREVIOUS YEAR",
    style:"line",
    borderColor: textColor,
    backgroundColor: surfaceColor,
    fill: false,
  },
  {
    label: "CURRENT YEAR",
    style:"line",
    borderColor: textColor,
    backgroundColor: surfaceColor,
    borderDash,
   // fill: false,
  },
];

const Template = (args) => <ChartLegend {...args} />;

export const Default = Template.bind({});
Default.args = {
  legendData,
};
