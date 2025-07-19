// ChartLine.jsx
import React, { useEffect, useMemo, useState, useRef } from "react";

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
import {
  legendDataSetUp,
  tooltipSetUp,
  scalesSetUp,
  labelColor,
  gridColor,
} from "../../../utils/ChartLineData";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler
);

const ChartLine = React.memo(({ data, legendData }) => {
  const [themeVersion, setThemeVersion] = useState(0);
  const chartRef = useRef(null);
  const prevColorsRef = useRef({ text: "", grid: "" });

  useEffect(() => {
    const checkThemeChange = () => {
      // Store current values in data attributes to compare
      const lastTextColor =
        document.documentElement.dataset.lastTextColor || "";
      const lastGridColor =
        document.documentElement.dataset.lastGridColor || "";

      // Check if CSS variables changed
      const colorsChanged =
        labelColor !== lastTextColor || gridColor !== lastGridColor;

      if (colorsChanged) {
        document.documentElement.dataset.lastTextColor = labelColor;
        document.documentElement.dataset.lastGridColor = gridColor;
        setThemeVersion((prev) => prev + 1);
      }
    };
    checkThemeChange();
    const interval = setInterval(checkThemeChange, 200);
    // listen for class changes on documentElement
    const observer = new MutationObserver(() => {
      checkThemeChange();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  // Force component to re-render when datasets or labels change
  useEffect(() => {
    if (!data || !data.labels || !data.datasets) return;
    setThemeVersion((prev) => prev + 1);
  }, [data]);

  const updatedData = useMemo(() => {
    if (!data || !data.labels || !data.datasets)
      return { labels: [], datasets: [] };
    const updatedDatasets =
      data.datasets?.filter(Boolean).map((dataset, index) => {
        return {
          ...dataset,
        };
      }) || [];

    return {
      labels: data.labels,
      datasets: updatedDatasets,
    };
  }, [data, themeVersion]);

  const options = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: legendDataSetUp,
        tooltip: tooltipSetUp,
      },
      scales: scalesSetUp,
    };
  }, [themeVersion]);

  console.log("ChartLine data.legendData:", legendData);
  return (
    <Line
      key={`chart-${themeVersion}`}
      ref={chartRef}
      data={updatedData}
      options={options}
      redraw={false}
    />
  );
});
export default ChartLine;
