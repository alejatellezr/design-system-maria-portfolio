// ChartDoughnut.stories.js
import React from "react";
import ChartDoughnut from "./ChartDoughnut";
import {labelsOverview,dataOverview,labelsProspects,dataProspects,dataBackgroudColorOverview,dataBackgroudColorProspects} from "../../../utils/ChartDoughnutData";
export default {
  title: "UI/ChartDoughnut",
  component: ChartDoughnut,
};

const Template = (args) => <ChartDoughnut {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Spend",
  labels: labelsOverview,
  data: dataOverview,
  colors:dataBackgroudColorOverview,

};

export const DefaultProspects = Template.bind({});
DefaultProspects.args = {
  title: "Spend",
  labels: labelsProspects,
  data: dataProspects,
  colors:dataBackgroudColorProspects,
};
