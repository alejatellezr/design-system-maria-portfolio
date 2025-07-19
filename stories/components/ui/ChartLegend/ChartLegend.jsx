// src/components/ChartLegend.jsx

import React from "react";

import "./_chartLegend.scss";

const ChartLegend = ({ legendData }) => {
  if (!legendData || legendData.length === 0) return null;

  return (
    <ul className="x-chart-legend">
      {legendData.map((ds, index) => {
        const isDashed = ds.borderDash && ds.borderDash.length > 0;
        const pointStyle = ds.style || "cube";

        return (
          <li key={index} className="x-chart-legend__item">
            <span
              className={`x-chart-legend__icon 
                ${
                  isDashed
                    ? "x-chart-legend__icon--dashed"
                    : "x-chart-legend__icon--solid"
                } 
                x-chart-legend__icon--${pointStyle}
              `}
              style={{
                borderColor: ds.borderColor,
                backgroundColor:
                  ds.fill === false ? ds.borderColor : ds.backgroundColor,
              }}
            />
            <p className="x-chart-legend__label x-font-graph">{ds.label}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ChartLegend;
