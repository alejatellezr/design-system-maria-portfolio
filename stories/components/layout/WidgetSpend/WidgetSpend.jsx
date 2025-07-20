import React, { useState, useMemo } from "react";
import ChartDoughnut from "../../ui/ChartDoughnut/ChartDoughnut";
import Switch from "../../ui/Switch/Switch";
import "./_widgetSpend.scss";

import {
  labelsOverview,
  dataOverview,
  dataBackgroudColorOverview,
  labelsProspects,
  dataProspects,
  dataBackgroudColorProspects,
  hoverOffset,
  borderWidth,
  legendDataOverview,
  legendDataProspects,
} from "../../../utils/ChartDoughnutData";
import ChartLegend from "./../../ui/ChartLegend/ChartLegend";

const WidgetSpend = ({ title = "Spend" }) => {
  const [showProspects, setShowProspects] = useState(false);

  const chartData = useMemo(() => {
    const labels = showProspects ? labelsProspects : labelsOverview;
    const chartlegend = showProspects
      ? legendDataOverview
      : legendDataProspects;
    const data = showProspects ? dataProspects : dataOverview;
    const backgroundColor = showProspects
      ? dataBackgroudColorProspects
      : dataBackgroudColorOverview;

    return {
      labels,
      datasets: [
        {
          label: "Spend Distribution",
          data,
          backgroundColor,
          hoverOffset,
          borderWidth,
        },
      ],
      chartlegend,
    };
  }, [showProspects]);

  return (
    <section className="x-widget-spend">
      <div className="x-widget-spend__header">
        <h3 className="x-widget-spend__title x-font-subtitle">{title}</h3>
        <Switch
          label="Show Prospects"
          checked={showProspects}
          onChange={() => setShowProspects((prev) => !prev)}
        />
      </div>
      <div className="x-widget-spend__chart">
        <div className="x-widget-spend__chart-wrapper">
          <ChartDoughnut
            data={chartData.datasets[0].data}
            labels={chartData.labels}
            colors={chartData.datasets[0].backgroundColor}
          />
        </div>
        <div className="x-widget-overview__legend">
          <ChartLegend legendData={chartData.chartlegend} />
        </div>
      </div>
    </section>
  );
};

export default WidgetSpend;
