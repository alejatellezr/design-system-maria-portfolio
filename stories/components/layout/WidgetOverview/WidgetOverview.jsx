import React, { useState, useMemo, useRef } from "react";
import ChartLine from "./../../ui/ChartLine/ChartLine";
import { ButtonGroup } from "./../../ui/ButtonGroup/ButtonGroup";
import Switch from "./../../ui/Switch/Switch";
import { ChartLegend } from "./../../ui/ChartLegend/ChartLegend";
import "./_widgetOverview.scss";
import {
  safeGetComputedStyle,
  getGraphColors,
  getChartColors,
} from "../../../utils/themeColors";

const pointRadius = 4;
const pointHoverRadius = 6;
const pointBorderWidth = 2;
const tension = 0;
const borderDash = [12, 8];

const WidgetOverview = () => {
  const [showPotentialProspects, setShowPotentialProspects] = useState(false);
  const currentColorsRef = useRef(getGraphColors());
  const currentColors = currentColorsRef.current;
  const chartColorsRef = useRef(getChartColors());
  const chartColors = chartColorsRef.current;
  const currentSurfaceColor = chartColors[2];

  const textColor = chartColors[1];
  const toggleProspects = () => setShowPotentialProspects((prev) => !prev);
  console.log("WidgetOverview component loaded");
  console.log({
    ChartLine,
    ButtonGroup,
    Switch,
    ChartLegend,
  });
  const labels = useMemo(
    () => [
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
    []
  );

  const datasets = useMemo(
    () => [
      {
        label: "OWNED CURRENT YEAR",
        data: [
          180000, 180000, 25000, 290000, 320000, 300000, 310000, 295000, 310000,
          320000, 350000, 120000,
        ],
        borderColor: currentColors[0],
        backgroundColor: currentSurfaceColor,
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
          300000, 18000, 270000, 420000, 390000, 370000, 190000, 200000, 180000,
          230000, 270000, 250000,
        ],
        borderColor: currentColors[1],
        backgroundColor: currentSurfaceColor,
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
          400000, 180000, 370000, 390000, 450000, 430000, 410000, 430000,
          410000, 400000, 390000, 300000,
        ],
        borderColor: currentColors[0],
        backgroundColor: currentSurfaceColor,
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
          250000, 180000, 260000, 310000, 330000, 290000, 300000, 270000,
          260000, 310000, 320000, 310000,
        ],
        borderColor: currentColors[1],
        backgroundColor: currentSurfaceColor,
        borderDash,
        fill: false,
        pointRadius,
        pointHoverRadius,
        pointBorderWidth,
        pointStyle: "rectRounded",
        tension,
      },
    ],
    [currentColors, currentSurfaceColor]
  );

  const chartData = useMemo(
    () => ({
      labels,
      datasets,
    }),
    [labels, datasets]
  );

  const [selectedPeriod, setSelectedPeriod] = useState("Month");
  const handlePeriodChange = (label) => {
    setSelectedPeriod(label);
  };
  const periodOptions = ["Month", "Quarter", "Semester"];
  const periodButtons = periodOptions.map((label) => ({
    label,
    iconName: "",
    style: selectedPeriod === label ? "solid" : "flat",
    active: selectedPeriod === label,
    onClick: () => handlePeriodChange(label),
  }));

  const [selectedView, setSelectedView] = useState("Graph");
  const handleViewChange = (label) => {
    setSelectedView(label);
  };
  const viewOptions = ["Graph", "Table"];
  const viewButtons = viewOptions.map((label) => ({
    label,
    iconName: label === "Graph" ? "IconTimeline" : "IconTableRow",
    style: selectedView === label ? "solid" : "flat",
    active: selectedView === label,
    iconOnly: true,
    onClick: () => handleViewChange(label),
  }));

  return (
    <div className="x-widget-overview">
      <div className="x-widget-overview__header">
        <h2 className="x-widget-overview__title x-font-subtitle">Overview</h2>
        <Switch
          label="Potential Prospects"
          checked={showPotentialProspects}
          onChange={toggleProspects}
        />
      </div>
      <div className="x-widget-overview__controls">
        <ButtonGroup orientation="row" buttons={periodButtons} />
        <ButtonGroup orientation="row" buttons={viewButtons} />
      </div>
      <div className="x-widget-overview__chart-wrapper">
      {/****/}<ChartLine  datasets={chartData.datasets} labels={chartData.labels} />
      </div>
      {/**<ChartLegend
        items={[
          { label: 'OWNED', color: '#DB2C66', style: 'solid' },
          { label: 'PROSPECT', color: '#2C66DB', style: 'solid' },
          { label: 'PREVIOUS YEAR', color: '#2C66DB', style: 'dashed' },
          { label: 'CURRENT YEAR', color: '#DB2C66', style: 'dashed' },
        ]}
      />**/}
    </div>
  );
};

export default WidgetOverview;
