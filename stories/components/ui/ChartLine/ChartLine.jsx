// ChartLine.jsx
import { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    
    const observer = new MutationObserver(() =>
      setThemeVersion((prev) => prev + 1)
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const data = useMemo(() => {
    return {
      labels,
      datasets: datasets?.filter(Boolean) || [],
    };
  }, [datasets, labels]);

  const options = useMemo(() => {
    const labelColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-text-default")
        .trim() || "#000";

    const gridColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-border-graph")
        .trim() || "#ccc";

    const fontFamily =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-family-graphs")
        .trim() || "sans-serif";

    return {
      responsive: true,
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
          },
        },
      },
    };
  }, [themeVersion]);

  return <Line key={themeVersion} data={data} options={options} />;
};
export default ChartLine;