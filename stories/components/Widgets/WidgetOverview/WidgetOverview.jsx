import React, { useState, useMemo, useRef } from "react";
import ChartLine from "../../ui/ChartLine/ChartLine";
import { ButtonGroup } from "../../ui/ButtonGroup/ButtonGroup";
import Switch from "../../ui/Switch/Switch";
import ChartLegend from "../../ui/ChartLegend/ChartLegend";
import "./_widgetOverview.scss";
import {
  safeGetComputedStyle,
  getGraphColors,
  getChartColors,
} from "../../../utils/themeColors";
import {
  labelsMonths,
  labelsQuarter,
  labelsSemester,
  datasetsOverview,
  datasetsOverviewQuarter,
  datasetsOverviewSemester,
  datasetsProspects,
  datasetsProspectsQuarter,
  datasetsProspectsSemester,
  legendDataOverview,
  legendDataProspects,
} from "../../../utils/ChartLineData";

const WidgetOverview = () => {
  const [showPotentialProspects, setShowPotentialProspects] = useState(false);
  const currentColorsRef = useRef(getGraphColors());
  const currentColors = currentColorsRef.current;
  const chartColorsRef = useRef(getChartColors());
  const chartColors = chartColorsRef.current;
  const currentSurfaceColor = chartColors[2];

  const textColor = chartColors[1];
  const toggleProspects = () => setShowPotentialProspects((prev) => !prev);

  const [selectedPeriod, setSelectedPeriod] = useState("Month");
  const labels = useMemo(() => {
    switch (selectedPeriod) {
      case "Quarter":
        return labelsQuarter;
      case "Semester":
        return labelsSemester;
      default:
        return labelsMonths;
    }
  }, [selectedPeriod]);
  const datasets = useMemo(() => {
    if (showPotentialProspects) {
      switch (selectedPeriod) {
        case "Quarter":
          return datasetsProspectsQuarter;
        case "Semester":
          return datasetsProspectsSemester;
        default:
          return datasetsProspects;
      }
    } else {
      switch (selectedPeriod) {
        case "Quarter":
          return datasetsOverviewQuarter;
        case "Semester":
          return datasetsOverviewSemester;
        default:
          return datasetsOverview;
      }
    }
  }, [showPotentialProspects, selectedPeriod]);

  const legendData = useMemo(() => {
    return showPotentialProspects ? legendDataProspects : legendDataOverview;
  }, [showPotentialProspects]);
  const chartData = useMemo(() => ({ labels, datasets }), [labels, datasets]);

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

  console.log("WidgetOverview render", {
    selectedPeriod,
    showPotentialProspects,
    chartData,
    legendData,
    periodButtons,
    viewButtons,
  });
  return (
    <section className="x-widget-overview">
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
        <ChartLine
          key={`${selectedPeriod}-${showPotentialProspects}`}
          data={chartData}
          legendData={legendData}
        />
      </div>
      <div className="x-widget-overview__legend">
        <ChartLegend legendData={legendData} />
      </div>
    </section>
  );
};

export default WidgetOverview;
