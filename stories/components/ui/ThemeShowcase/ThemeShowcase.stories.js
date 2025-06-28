import React from "react";
import { ThemeShowcase } from "./ThemeShowcase";

export default {
  title: "Theme/Showcase",
  component: ThemeShowcase,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
# Theme Showcase

This showcase demonstrates how the design system components look in both light and dark modes.

## Usage

1. Use the **dark mode toggle** (🌙) in the Storybook toolbar to switch between themes
2. The toolbar theme selector will also update automatically
3. All components and the Storybook interface will switch themes together

## Features

- **Automatic theme detection**: Components automatically adapt to the selected theme
- **Synchronized switching**: All UI elements update together
- **CSS custom properties**: Theme values are defined using CSS variables for easy customization
- **Manager theme sync**: The Storybook interface itself changes theme to match

## Implementation

The theme system uses:
- \`storybook-dark-mode\` addon for theme toggle
- CSS custom properties defined in \`_variables.scss\`
- \`.x-dark-mode\` class applied to components
- Custom manager theme configuration
        `,
      },
    },
  },
};

const Template = (args) => <ThemeShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ThemeComparison = {
  render: () => <ThemeShowcase />,
  parameters: {
    docs: {
      description: {
        story:
          "Use the dark mode toggle in the toolbar to see the theme switching in action. Notice how all colors, backgrounds, and component styles update seamlessly.",
      },
    },
  },
};
