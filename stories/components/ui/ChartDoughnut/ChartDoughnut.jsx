// ChartDoughnut.jsx
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./_chartDoughnut.scss";
import { safeGetComputedStyle } from "../../../utils/themeColors";
import {
  labelColor,
  currentTextColor,
  cutout,
  legendSetup,
  tooltipSetup,
  hoverOffset,
  borderWidth,
} from "../../../utils/ChartDoughnutData";
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut = ({ data, labels, colors }) => {
  const [themeVersion, setThemeVersion] = useState(0);
  const chartRef = useRef(null);

  // Check for theme changes
  useEffect(() => {
    const checkThemeChange = () => {
      const currentChartTextColor = currentTextColor;

      const lastTextColor =
        document.documentElement.dataset.lastTextColor || "";

      if (currentChartTextColor !== lastTextColor) {
        document.documentElement.dataset.lastTextColor = currentChartTextColor;
        setThemeVersion((prev) => prev + 1);
      }
    };

    checkThemeChange();
    const interval = setInterval(checkThemeChange, 200);

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

  const chartData = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: colors,
          hoverOffset: hoverOffset,
          borderWidth: borderWidth,
        },
      ],
    };
  }, [data, labels, colors, themeVersion]);

  const options = useMemo(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    cutout: cutout,
    plugins: {
      legend: legendSetup,
      tooltip: tooltipSetup,
    },
  };
}, [themeVersion]);

  return (
    <Doughnut
      key={`doughnut-${themeVersion}`}
      ref={chartRef}
      data={chartData}
      options={options}
    />
  );
};

export default ChartDoughnut;
