import React from "react";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";

export const DocsContainer = ({ context, children }) => {
  // Get theme from globals context (no hooks allowed in DocsContainer)
  const isDark = context.globals?.theme === "dark";
  const theme = isDark ? themes.dark : themes.light;

  // Apply theme classes immediately without useEffect
  // The theme sync will be handled by the preview decorator
  const themeClass = isDark ? "x-dark-mode" : "";

  return (
    <BaseContainer
      context={{
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            ...(context.parameters?.docs || {}),
            theme,
          },
        },
      }}
    >
      <div className={themeClass}>{children}</div>
    </BaseContainer>
  );
};
