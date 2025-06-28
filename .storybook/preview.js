/** @type { import('@storybook/react').Preview } */
import { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import "/stories/styles/main.scss";

// Global types for theme switching in toolbar
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light Mode", icon: "sun" },
        { value: "dark", title: "Dark Mode", icon: "moon" },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

// Enhanced decorator to sync storybook-dark-mode with context and apply CSS classes
const withDarkModeSync = (Story, context) => {
  const isDark = useDarkMode();

  useEffect(() => {
    // Sync global theme manually for DocsContainer and other components
    const expected = isDark ? "dark" : "light";
    if (context.globals.theme !== expected) {
      // Update globals to sync with dark mode state
      context.globals.theme = expected;

      // Emit update to sync toolbar
      if (window.__STORYBOOK_ADDONS_CHANNEL__) {
        window.__STORYBOOK_ADDONS_CHANNEL__.emit("updateGlobals", {
          globals: { theme: expected },
        });
      }
    }

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
      exclude: ["theme"], // Hide theme from controls panel since we have the dark mode toggle
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we handle theming differently
    },
  },
  tags: ["autodocs"],
};

export default preview;
