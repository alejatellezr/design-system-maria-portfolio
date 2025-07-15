import React from "react";
import ChartLegend from "./ChartLegend";
import { getGraphColors, getChartColors } from "../../../utils/themeColors";

const colors = getGraphColors();
const surfaceColor = getChartColors()[2];

const pointRadius = 4;
const pointHoverRadius = 6;
const pointBorderWidth = 2;
const tension = 0;
const borderDash = [12, 8];

export default {
  title: "UI/ChartLegend",
  component: ChartLegend,
};

const datasets = [
  {
    label: "OWNED CURRENT YEAR",
    data: [], // Not needed for legend
    borderColor: colors[0],
    backgroundColor: surfaceColor,
    fill: false,
    pointRadius,
    pointHoverRadius,
    pointBorderWidth,
    pointStyle: "circle",
    tension,
  },
  {
    label: "PROSPECT Previous YEAR",
    data: [],
    borderColor: colors[1],
    backgroundColor: surfaceColor,
    fill: false,
    pointRadius,
    pointHoverRadius,
    pointBorderWidth,
    pointStyle: "rectRounded",
    tension,
  },
  {
    label: "POTENTIAL PROSPECTS CURRENT YEAR",
    data: [],
    borderColor: colors[2],
    backgroundColor: surfaceColor,
    fill: false,
    pointRadius,
    pointHoverRadius,
    pointBorderWidth,
    pointStyle: "crossRot",
    tension,
  },
  {
    label: "OWNED PREVIOUS YEAR",
    data: [],
    borderColor: colors[0],
    backgroundColor: surfaceColor,
    borderDash,
    fill: false,
    pointRadius,
    pointHoverRadius,
    pointBorderWidth,
    pointStyle: "circle",
    tension,
  },
  {
    label: "PROSPECT CURRENT YEAR",
    data: [],
    borderColor: colors[1],
    backgroundColor: surfaceColor,
    borderDash,
    fill: false,
    pointRadius,
    pointHoverRadius,
    pointBorderWidth,
    pointStyle: "rectRounded",
    tension,
  },
  {
    label: "POTENTIAL PROSPECTS PREVIOUS YEAR",
    data: [],
    borderColor: colors[2],
    backgroundColor: surfaceColor,
    borderDash,
    fill: false,
    pointRadius,
    pointHoverRadius,
    pointBorderWidth,
    pointStyle: "crossRot",
    tension,
  },
];

const Template = (args) => <ChartLegend {...args} />;

export const Default = Template.bind({});
Default.args = {
  datasets,
};
