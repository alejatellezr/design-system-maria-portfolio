# Design System Maria Portfolio

A comprehensive design system built with React and Storybook, featuring a complete dark/light theme implementation.

## 🌓 Theme System

This design system includes a sophisticated theming system that supports both light and dark modes:

### Features

- **Seamless theme switching** using the Storybook dark mode toggle
- **Synchronized UI** - both components and Storybook interface change together
- **CSS custom properties** for easy theme customization
- **Automatic theme detection** and persistence

### How to Use

1. Open Storybook with `npm run storybook`
2. Use the dark mode toggle (🌙) in the toolbar to switch themes
3. All components and documentation will update automatically

### Theme Implementation

- **CSS Variables**: Defined in `/stories/styles/abstracts/_variables.scss`
- **Dark Mode Class**: `.x-dark-mode` applied dynamically
- **Manager Theme**: Custom Storybook manager themes that match the design system
- **Component Sync**: All components automatically respect theme changes

### Theme Showcase

Check out the "Theme/Showcase" story to see all components in both light and dark modes.

## Getting Started

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## Project Structure

```
stories/
├── components/          # React components
│   ├── ui/             # UI components (buttons, inputs, etc.)
│   └── layout/         # Layout components
├── styles/             # Global styles and theme variables
│   ├── abstracts/      # Variables, mixins, functions
│   └── main.scss       # Main stylesheet
└── docs/               # Documentation files
```

Created with love by Aleja Tellez ❤️❤️
