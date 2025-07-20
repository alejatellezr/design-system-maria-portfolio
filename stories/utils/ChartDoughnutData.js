import React, { useState, useMemo, useRef } from "react";
import {
  safeGetComputedStyle,
  getGraphColors,
  getChartColors,
} from "./themeColors";

export const labelColor = safeGetComputedStyle(
  "--color-text-default",
  "#000000"
);
export const currentTextColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-text-default")
  .trim();

export const currentColors = getGraphColors();
export const cutout = "35%";
export const hoverOffset = 50;
export const borderWidth = 2;
export const currentSurfaceColor = getChartColors()[2];
export const tooltipSurfaceColor = getChartColors()[3];
export const textColor = getChartColors()[1];
export const tooltipTextColor = currentSurfaceColor;
export const legendSetup = {
  display: false,
  position: "bottom",
  labels: {
    usePointStyle: true,
    pointStyle: "rectRounded",
    color: labelColor,
    font: {
      size: 14,
      weight: "500",
    },
    padding: 20,
  },
};
export const tooltipSetup = {
  callbacks: {
    label: (tooltipItem) => {
      return `${tooltipItem.label}: ${tooltipItem.raw}%`;
    },
  },
};
/**Overview Graph - START */
export const labelsOverview = ["OWNED", "PROSPECTS"];
export const dataOverview = [40, 60];
export const dataBackgroudColorOverview = [currentColors[0], currentColors[1]];
export const legendDataOverview = [
  {
    label: "OWNED",
    style: "cube",
    borderColor: currentColors[0],
    backgroundColor: currentSurfaceColor,
    fill: false,
  },
  {
    label: "PROSPECTS",
    style: "cube",
    borderColor: currentColors[1],
    backgroundColor: currentSurfaceColor,
    fill: false,
  },
];
/**Overview Graph - END */
/**Prospects Graph - START */
export const labelsProspects = ["OWNED", "PROSPECTS", "POTENTIAL PROSPECTS"];
export const dataProspects = [30, 50, 20];
export const dataBackgroudColorProspects = [
  currentColors[0],
  currentColors[1],
  currentColors[2],
];
export const legendDataProspects = [
  {
    label: "OWNED",
    style: "cube",
    borderColor: currentColors[0],
    backgroundColor: currentSurfaceColor,
    fill: false,
  },
  {
    label: "PROSPECTS",
    style: "cube",
    borderColor: currentColors[1],
    backgroundColor: currentSurfaceColor,
    fill: false,
  },
  {
    label: "POTENTIAL PROSPECTS",
    style: "cube",
    borderColor: currentColors[2],
    backgroundColor: currentSurfaceColor,
    fill: false,
  },
];
/**Prospects Graph - END */
