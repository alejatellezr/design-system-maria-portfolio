// ChartLine.jsx
import { useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler
);

const getGraphColors = () => [
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-1")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-2")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-3")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-4")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-5")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-6")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-7")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-8")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-9")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--graph-color-10")
    .trim(),
];

const getChartColors = () => [
  getComputedStyle(document.documentElement)
    .getPropertyValue("--color-border-graph")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--color-text-default")
    .trim(),
  getComputedStyle(document.documentElement)
    .getPropertyValue("--surface-primary")
    .trim(),
    getComputedStyle(document.documentElement)
    .getPropertyValue("--font-family-graphs")
    .trim(),
];

const ChartLine = ({ showPotentialProspects = false }) => {
  const [colors, setColors] = useState(getGraphColors());
  const [ChartColors, setChartColors] = useState(getChartColors());
  const labelColor = ChartColors[1];
  const gridColor = ChartColors[0];
  const surfaceColor = ChartColors[2];
  const pointBorderWidth = 2;
  const fontFamilyGraph = ChartColors[3];
  const pointRadius = 4;
  const pointHoverRadius = 6;
  const tension = 0;
  const borderDash= [12, 8];

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setColors(getGraphColors());
      setChartColors(getChartColors());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const labels = [
    "Jan 2024",
    "Feb 2024",
    "Mar 2024",
    "Apr 2024",
    "May 2024",
    "Jun 2024",
    "Jul 2024",
    "Aug 2024",
    "Sep 2024",
    "Oct 2024",
    "Nov 2024",
    "Dec 2024",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "OWNED CURRENT YEAR",
        data: [
          180000, 180000, 250000, 290000, 320000, 300000, 310000, 295000,
          310000, 320000, 350000, 120000,
        ],
        borderColor: colors[0],
        backgroundColor: surfaceColor,
        fill: false,
        pointRadius: pointRadius,
        pointHoverRadius: pointHoverRadius,
        pointBorderWidth: pointBorderWidth,
        pointStyle: "circle",
        tension: tension,
      },
      {
        label: "PROSPECT CURRENT YEAR",
        data: [
          300000, 180000, 270000, 420000, 390000, 370000, 190000, 200000,
          180000, 230000, 270000, 250000,
        ],
        borderColor: colors[1],
        backgroundColor: surfaceColor,
        fill: false,
        pointRadius: pointRadius,
        pointHoverRadius: pointHoverRadius,
        pointStyle: "rectRounded",
        pointBorderWidth: pointBorderWidth,
        tension: tension,
      },
      showPotentialProspects && {
        label: "POTENTIAL PROSPECTS CURRENT YEAR",
        data: [
          200000, 180000, 230000, 250000, 240000, 230000, 190000, 180000,
          170000, 190000, 200000, 180000,
        ],
        borderColor: colors[2],
        backgroundColor: surfaceColor,
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
          400000, 18000, 370000, 390000, 450000, 430000, 410000, 430000,
          410000, 400000, 390000, 300000,
        ],
        borderColor: colors[0],
        borderDash: borderDash,
        backgroundColor: surfaceColor,
        fill: false,
        pointRadius: pointRadius,
        pointHoverRadius: pointHoverRadius,
        pointStyle: "circle",
        pointBorderWidth: pointBorderWidth,
        tension: tension,
      },
      {
        label: "PROSPECT CURRENT YEAR",
        data: [
          250000, 180000, 260000, 310000, 330000, 290000, 300000, 270000,
          260000, 310000, 320000, 310000,
        ],
        borderColor: colors[1],
        borderDash: borderDash,
        backgroundColor: surfaceColor,
        fill: false,
        pointRadius: pointRadius,
        pointHoverRadius: pointHoverRadius,
        pointStyle: "rectRounded",
        pointBorderWidth: pointBorderWidth,
        tension: tension,
      },
      ,
      showPotentialProspects && {
        label: "POTENTIAL PROSPECTS PREVIOUS YEAR",
        data: [
          180000, 200000, 230000, 190000, 250000, 190000, 180000, 170000,
          200000, 240000, 180000, 230000,
        ],
        borderColor: colors[2],
        borderDash: borderDash,
        backgroundColor: surfaceColor,
        fill: false,
        pointRadius: pointRadius,
        pointHoverRadius: pointHoverRadius,
        pointStyle: "crossRot",
        pointBorderWidth: pointBorderWidth,
        tension: tension,
      },
    ].filter(Boolean),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: labelColor,
          usePointStyle: true,
          pointStyle: "line",

          font: {
            family: fontFamilyGraph,
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: labelColor,
          font: {
            family: fontFamilyGraph,
            size: 12,
          },
        },
        grid: {
          color: gridColor,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: labelColor,
          font: {
            family: fontFamilyGraph,
            size: 12,
          },
          callback: (value) => `$${(value / 1000).toFixed(0)}K`,
        },
        grid: {
          color: gridColor,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartLine;
