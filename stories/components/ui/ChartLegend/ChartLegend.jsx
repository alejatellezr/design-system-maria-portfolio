// src/components/ChartLegend.jsx

import React from "react";
import './_chartLegend.scss';


const ChartLegend = ({ datasets = [] }) => {
  if (!datasets || datasets.length === 0) return null;

  return (
    <ul className="x-chart-legend">
      {datasets.map((ds, index) => {
        const isDashed = ds.borderDash && ds.borderDash.length > 0;
        const pointStyle = ds.pointStyle || "circle";

        return (
          <li key={index} className="x-chart-legend__item">
            <span
              className={`x-chart-legend__icon 
                ${isDashed ? "x-chart-legend__icon--dashed" : ""} 
              x-chart-legend__icon--${pointStyle}
              ${
                ds.fill === false
                  ? `x-chart-legend__icon--${ds.borderColor}`
                  : ds.backgroundColor
                  ? `x-chart-legend__icon--${ds.backgroundColor}`
                  : ""
              }
              `}
                            style={{
                
                backgroundColor:
                  ds.fill === false ? ds.borderColor : ds.backgroundColor,
                border: isDashed
                  ? `2px dashed ${ds.borderColor}`
                  : `2px solid ${ds.borderColor}`,
                transform:
                  pointStyle === "crossRot" ? "rotate(45deg)" : "none",
                display: "inline-block",
              }}

            />
            <p className="x-chart-legend__label x-font-graph">
              {ds.label}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ChartLegend;
