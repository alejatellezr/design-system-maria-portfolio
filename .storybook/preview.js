/** @type { import('@storybook/react').Preview } */
import { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import "/stories/styles/main.scss";

// Simplified decorator that only applies CSS classes based on dark mode state
const withDarkModeSync = (Story, context) => {
  const isDark = useDarkMode();

  useEffect(() => {
    // Apply theme class to document root for manager theming
    document.documentElement.classList.toggle("x-dark-mode", isDark);

    // Apply theme class to body for component styling
    document.body.classList.toggle("x-dark-mode", isDark);

    // Also apply to the iframe if available (for better docs integration)
    const iframe = document.getElementById("storybook-preview-iframe");
    if (iframe) {
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc?.body) {
        iframeDoc.body.classList.toggle("x-dark-mode", isDark);
        iframeDoc.documentElement.classList.toggle("x-dark-mode", isDark);
      }
    }

    // Emit dark mode event for manager theme sync
    if (window.__STORYBOOK_ADDONS_CHANNEL__) {
      window.__STORYBOOK_ADDONS_CHANNEL__.emit("DARK_MODE", isDark);
    }
  }, [isDark]);

  return <Story {...context} />;
};

export const decorators = [withDarkModeSync];

const preview = {
  parameters: {
    darkMode: {
      current: "light", // Default mode
      // Configure the dark mode addon
      darkClass: "x-dark-mode",
      lightClass: "x-light-mode",
      classTarget: "html",
      stylePreview: true,
      // Use built-in themes that sync automatically
      dark: { ...themes.dark },
      light: { ...themes.light },
    },
    docs: {
      // Let Storybook handle docs container automatically with theme sync
      theme: themes.light, // Default docs theme
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we handle theming differently
    },
  },
  tags: ["autodocs", "autodocs"],
};

export default preview;
