import ChartLine from "./ChartLine";

const pointRadius = 4;
const pointHoverRadius = 6;
const pointBorderWidth = 2;
const tension = 0;
const borderDash = [12, 8];

export default {
  title: "UI/ChartLine",
  component: ChartLine,
};

const Template = (args) => <ChartLine {...args} />;

export const CustomStyledData = Template.bind({});
CustomStyledData.args = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "OWNED CURRENT YEAR",
      data: [
        180000, 180000, 250000, 290000, 320000, 300000, 310000, 295000, 310000,
        320000, 350000, 120000,
      ],
      fill: false,
      pointRadius,
      pointHoverRadius,
      pointBorderWidth,
      pointStyle: "circle",
      tension,
    },
    {
      label: "PROSPECT Previous YEAR",
      data: [
        300000, 180000, 270000, 420000, 390000, 370000, 190000, 200000, 180000,
        230000, 270000, 250000,
      ],
      fill: false,
      pointRadius,
      pointHoverRadius,
      pointBorderWidth,
      pointStyle: "rectRounded",
      tension,
    },
    {
      label: "OWNED PREVIOUS YEAR",
      data: [
        400000, 180000, 370000, 390000, 450000, 430000, 410000, 430000, 410000,
        400000, 390000, 300000,
      ],
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
      data: [
        250000, 180000, 260000, 310000, 330000, 290000, 300000, 270000, 260000,
        310000, 320000, 310000,
      ],
      borderDash,
      fill: false,
      pointRadius,
      pointHoverRadius,
      pointBorderWidth,
      pointStyle: "rectRounded",
      tension,
    },
  ],
};

export const CustomStyledDataProspects = Template.bind({});
CustomStyledDataProspects.args = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "OWNED CURRENT YEAR",
      data: [
        180000, 180000, 250000, 290000, 320000, 300000, 310000, 295000, 310000,
        320000, 350000, 120000,
      ],
      fill: false,
      pointRadius,
      pointHoverRadius,
      pointBorderWidth,
      pointStyle: "circle",
      tension,
    },
    {
      label: "PROSPECT Previous YEAR",
      data: [
        300000, 180000, 270000, 420000, 390000, 370000, 190000, 200000, 180000,
        230000, 270000, 250000,
      ],
      fill: false,
      pointRadius,
      pointHoverRadius,
      pointBorderWidth,
      pointStyle: "rectRounded",
      tension,
    },
    {
      label: "POTENTIAL PROSPECTS CURRENT YEAR",
      data: [
        200000, 180000, 230000, 250000, 240000, 230000, 190000, 180000, 170000,
        190000, 200000, 180000,
      ],
      fill: false,
      pointRadius: pointRadius,
      pointHoverRadius: pointHoverRadius,
      pointStyle: "crossRot",
      pointBorderWidth: pointBorderWidth,
      tension: tension,
    },
    {
      label: "OWNED PREVIOUS YEAR",
      data: [
        400000, 18000, 370000, 390000, 450000, 430000, 410000, 430000, 410000,
        400000, 390000, 300000,
      ],
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
      data: [
        250000, 180000, 260000, 310000, 330000, 290000, 300000, 270000, 260000,
        310000, 320000, 310000,
      ],
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
      data: [
        180000, 200000, 230000, 190000, 250000, 190000, 180000, 170000, 200000,
        240000, 180000, 230000,
      ],
      borderDash: borderDash,
      fill: false,
      pointRadius: pointRadius,
      pointHoverRadius: pointHoverRadius,
      pointStyle: "crossRot",
      pointBorderWidth: pointBorderWidth,
      tension: tension,
    },
  ],
};
