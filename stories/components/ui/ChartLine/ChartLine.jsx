// ChartLine.jsx
import { useEffect, useMemo, useState, useRef } from "react";
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
import { getGraphColors, getChartColors } from "../../../utils/themeColors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler
);

const ChartLine = ({ showPotentialProspects = false, datasets, labels }) => {
  const [themeVersion, setThemeVersion] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const checkThemeChange = () => {
      const currentTextColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-text-default")
        .trim();
      const currentGridColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-border-graph")
        .trim();

      // Store current values in data attributes to compare
      const lastTextColor =
        document.documentElement.dataset.lastTextColor || "";
      const lastGridColor =
        document.documentElement.dataset.lastGridColor || "";

      // Check if CSS variables changed
      const colorsChanged =
        currentTextColor !== lastTextColor ||
        currentGridColor !== lastGridColor;

      if (colorsChanged) {
        document.documentElement.dataset.lastTextColor = currentTextColor;
        document.documentElement.dataset.lastGridColor = currentGridColor;
        setThemeVersion((prev) => prev + 1);
      }
    };
    checkThemeChange();

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
    setThemeVersion((prev) => prev + 1);
  }, [datasets, labels]);

  const data = useMemo(() => {
    // Get current theme colors dynamically
    const currentColors = getGraphColors();
    const currentSurfaceColor = getChartColors()[2];

    // Update dataset colors with current theme colors
    const updatedDatasets =
      datasets?.filter(Boolean).map((dataset, index) => {
        const colorIndex = index % currentColors.length;
        return {
          ...dataset,
          borderColor: currentColors[colorIndex],
          backgroundColor: currentSurfaceColor,
        };
      }) || [];

    return {
      labels,
      datasets: updatedDatasets,
    };
  }, [datasets, labels, themeVersion]);

  const options = useMemo(() => {
    // Helper function to get CSS custom property with fallback
    const getCSSProperty = (property, fallback) => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue(property)
        .trim();
      return value || fallback;
    };

    const labelColor = getCSSProperty("--color-text-default", "#000000");
    const gridColor = getCSSProperty("--color-border-graph", "#e0e0e0");
    const fontFamily = getCSSProperty(
      "--font-family-graphs",
      "system-ui, -apple-system, sans-serif"
    );

    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: labelColor,
            usePointStyle: true,
            pointStyle: "line",
            font: {
              family: fontFamily,
              size: 14,
            },
          },
        },
        tooltip: {
          titleColor: labelColor,
          bodyColor: labelColor,
          backgroundColor: getCSSProperty(
            "--color-bg-tooltip",
            "rgba(0, 0, 0, 0.8)"
          ),
          borderColor: getCSSProperty("--color-border-tooltip", "transparent"),
          borderWidth: 1,
        },
      },
      scales: {
        x: {
          ticks: {
            color: labelColor,
            font: {
              family: fontFamily,
              size: 12,
            },
          },
          grid: {
            color: gridColor,
            borderColor: gridColor,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: labelColor,
            font: {
              family: fontFamily,
              size: 12,
            },
            callback: (value) => `$${(value / 1000).toFixed(0)}K`,
          },
          grid: {
            color: gridColor,
            borderColor: gridColor,
          },
        },
      },
    };
  }, [themeVersion]);

  return (
    <Line
      key={`chart-${themeVersion}`}
      ref={chartRef}
      data={data}
      options={options}
      redraw={true}
    />
  );
};
export default ChartLine;
