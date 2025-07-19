import ChartLine from "./ChartLine";
import {
  safeGetComputedStyle,
  getGraphColors,
  getChartColors,
} from "../../../utils/themeColors";
import {
  labelsMonths,
  datasetsOverview,
  legendDataOverview,
  datasetsProspects,
  legendDataProspects,
} from "../../../utils/ChartLineData";

export default {
  title: "UI/ChartLine",
  component: ChartLine,
};

const Template = (args) => <ChartLine {...args} />;

export const CustomStyledData = Template.bind({});
CustomStyledData.args = {
  data: {
    labels: labelsMonths,
    datasets: datasetsOverview,
  },
  legendData: legendDataOverview,
};

export const CustomStyledDataProspects = Template.bind({});
CustomStyledDataProspects.args = {
  data: {
    labels: labelsMonths,
    datasets: datasetsProspects,
  },
  legendData: legendDataProspects,
};
