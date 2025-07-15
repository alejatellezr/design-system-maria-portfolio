const safeGetComputedStyle = (variableName) => {
  if (typeof window === "undefined" || !document?.documentElement) {
    return "";
  }

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

export const getGraphColors = () => [
  safeGetComputedStyle("--graph-color-1"),
  safeGetComputedStyle("--graph-color-2"),
  safeGetComputedStyle("--graph-color-3"),
  safeGetComputedStyle("--graph-color-4"),
  safeGetComputedStyle("--graph-color-5"),
  safeGetComputedStyle("--graph-color-6"),
  safeGetComputedStyle("--graph-color-7"),
  safeGetComputedStyle("--graph-color-8"),
  safeGetComputedStyle("--graph-color-9"),
  safeGetComputedStyle("--graph-color-10"),
];

export const getChartColors = () => [
  safeGetComputedStyle("--color-border-graph"),
  safeGetComputedStyle("--color-text-default"),
  safeGetComputedStyle("--surface-primary"),
  safeGetComputedStyle("--font-family-graphs"),
];
