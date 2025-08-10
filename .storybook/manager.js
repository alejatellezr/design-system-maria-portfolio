import { addons } from "@storybook/manager-api";

import { themes, create } from "@storybook/theming";

// Create custom themes that align with your design system
const lightTheme = create({
  base: "light",
  brandTitle: "Design System Maria Tellez Portfolio",
  brandUrl: "#",
  brandTarget: "_self",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#e9e9e6",
  appBorderRadius: 16,

  // Text colors
  textColor: "#313131",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#313131",
  barSelectedColor: "#1e73f8",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#fafafa",
  inputBorder: "#e9e9e6",
  inputTextColor: "#313131",
  inputBorderRadius: 16,
});

const darkTheme = create({
  base: "dark",
  brandTitle: "Design System Maria Tellez Portfolio",
  brandUrl: "#",
  brandTarget: "_self",

  // UI
  appBg: "#090909",
  appContentBg: "#090909",
  appBorderColor: "#585858",
  appBorderRadius: 16,

  // Text colors
  textColor: "#f4f4f4",
  textInverseColor: "#090909",

  // Toolbar default and active colors
  barTextColor: "#f4f4f4",
  barSelectedColor: "#e41655",
  barBg: "#100f0f",

  // Form colors
  inputBg: "#100f0f",
  inputBorder: "#585858",
  inputTextColor: "#f4f4f4",
  inputBorderRadius: 16,
});

// Set up dynamic theme switching
addons.setConfig({
  theme: lightTheme, // Default theme
  initialActive: 'UI', // Default active tab/page
});

// Listen for theme changes and update manager theme accordingly
const channel = addons.getChannel();
let currentManagerTheme = "light";

// Update manager theme based on dark mode addon
channel.addListener("DARK_MODE", (isDark) => {
  const newTheme = isDark ? "dark" : "light";
  if (newTheme !== currentManagerTheme) {
    currentManagerTheme = newTheme;
    addons.setConfig({
      theme: isDark ? darkTheme : lightTheme,
    });
  }
});