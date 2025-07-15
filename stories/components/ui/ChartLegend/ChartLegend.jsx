// src/components/ChartLegend.jsx

import React from "react";

const shapeStyles = {
  circle: "50%",
  rectRounded: "4px",
  crossRot: "0", // We'll use rotation instead
};

const ChartLegend = ({ datasets = [] }) => {
  if (!datasets || datasets.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {datasets.map((ds, index) => {
        const isDashed = ds.borderDash && ds.borderDash.length > 0;
        const pointStyle = ds.pointStyle || "circle";

        return (
          <div key={index} className="flex items-center gap-2">
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: shapeStyles[pointStyle] || "0",
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
            <span className="text-sm text-gray-800">{ds.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ChartLegend;
