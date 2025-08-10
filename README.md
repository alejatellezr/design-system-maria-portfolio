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
+---assets
ª       accessibility.png
ª       accessibility.svg
ª       addon-library.png
ª       assets.png
ª       avif-test-image.avif
ª       context.png
ª       discord.svg
ª       docs.png
ª       figma-plugin.png
ª       github.svg
ª       share.png
ª       styling.png
ª       testing.png
ª       theming.png
ª       tutorials.svg
ª       youtube.svg
ª       
+---components
ª   +---layout
ª   ª   +---CreativeCard
ª   ª   ª       CreativeCard.jsx
ª   ª   ª       CreativeCard.stories.js
ª   ª   ª       _creativecard.scss
ª   ª   ª       
ª   ª   +---CreativeThumbnail
ª   ª   ª       CreativeThumbnail.jsx
ª   ª   ª       CreativeThumbnail.stories.js
ª   ª   ª       _creativeThumbnail.scss
ª   ª   ª       
ª   ª   +---CreativeTop
ª   ª   ª       CreativeTop.jsx
ª   ª   ª       CreativeTop.stories.js
ª   ª   ª       _creativeTop.scss
ª   ª   ª       
ª   ª   +---FilterToolbar
ª   ª   ª       FilterToolbar.jsx
ª   ª   ª       FilterToolbar.stories.js
ª   ª   ª       _filterToolbar.scss
ª   ª   ª       
ª   ª   +---Footer
ª   ª   ª       Footer.jsx
ª   ª   ª       Footer.stories.js
ª   ª   ª       _footer.scss
ª   ª   ª       
ª   ª   +---Header
ª   ª   ª       Header.jsx
ª   ª   ª       Header.stories.js
ª   ª   ª       _header.scss
ª   ª   ª       
ª   ª   +---Menu
ª   ª           Menu.jsx
ª   ª           Menu.stories.jsx
ª   ª           _menu.scss
ª   ª           
ª   +---Pages
ª   ª   +---Colors
ª   ª   ª       Colors.jsx
ª   ª   ª       Colors.stories.js
ª   ª   ª       _colors.scss
ª   ª   ª       
ª   ª   +---Dashboard
ª   ª   ª       Dashboard.jsx
ª   ª   ª       Dashboard.stories.js
ª   ª   ª       _dashboard.scss
ª   ª   ª       
ª   ª   +---Fonts
ª   ª   ª       Fonts.jsx
ª   ª   ª       Fonts.stories.js
ª   ª   ª       _fonts.scss
ª   ª   ª       
ª   ª   +---Home
ª   ª           page.css
ª   ª           Page.jsx
ª   ª           Page.stories.js
ª   ª           
ª   +---ui
ª   ª   +---Accordion
ª   ª   ª       Accordion.jsx
ª   ª   ª       Accordion.stories.js
ª   ª   ª       _accordion.scss
ª   ª   ª       
ª   ª   +---BroadcastMessage
ª   ª   ª       BroadcastMessage.jsx
ª   ª   ª       BroadcastMessage.stories.js
ª   ª   ª       _broadcastMessage.scss
ª   ª   ª       
ª   ª   +---Button
ª   ª   ª       Button.jsx
ª   ª   ª       Button.stories.js
ª   ª   ª       _button.scss
ª   ª   ª       
ª   ª   +---ButtonGroup
ª   ª   ª       ButtonGroup.jsx
ª   ª   ª       ButtonGroup.stories.js
ª   ª   ª       _buttonGroup.scss
ª   ª   ª       
ª   ª   +---ButtonMenuIcon
ª   ª   ª       ButtonMenuIcon.jsx
ª   ª   ª       ButtonMenuIcon.stories.js
ª   ª   ª       _buttonMenuIcon.scss
ª   ª   ª       
ª   ª   +---ChartDoughnut
ª   ª   ª       ChartDoughnut.jsx
ª   ª   ª       ChartDoughnut.stories.js
ª   ª   ª       _chartDoughnut.scss
ª   ª   ª       
ª   ª   +---ChartLegend
ª   ª   ª       ChartLegend.jsx
ª   ª   ª       ChartLegend.stories.js
ª   ª   ª       _chartLegend.scss
ª   ª   ª       
ª   ª   +---ChartLine
ª   ª   ª       ChartLine.jsx
ª   ª   ª       ChartLine.stories.js
ª   ª   ª       _chartLine.scss
ª   ª   ª       
ª   ª   +---Checkbox
ª   ª   ª       Checkbox.jsx
ª   ª   ª       Checkbox.stories.js
ª   ª   ª       _checkbox.scss
ª   ª   ª       
ª   ª   +---CheckboxGroup
ª   ª   ª       CheckboxGroup.jsx
ª   ª   ª       CheckboxGroup.stories.js
ª   ª   ª       _checkboxGroup.scss
ª   ª   ª       
ª   ª   +---Chip
ª   ª   ª       Chip.jsx
ª   ª   ª       Chip.stories.js
ª   ª   ª       _chip.scss
ª   ª   ª       
ª   ª   +---ChipStatus
ª   ª   ª       ChipStatus.jsx
ª   ª   ª       ChipStatus.stories.js
ª   ª   ª       _chipStatus.scss
ª   ª   ª       
ª   ª   +---Dialog
ª   ª   ª       Dialog.jsx
ª   ª   ª       Dialog.stories.js
ª   ª   ª       _dialog.scss
ª   ª   ª       
ª   ª   +---dropdown
ª   ª   ª       Dropdown.jsx
ª   ª   ª       Dropdown.stories.js
ª   ª   ª       _dropdown.scss
ª   ª   ª       
ª   ª   +---Grid
ª   ª   ª       Grid.jsx
ª   ª   ª       grid.stories.js
ª   ª   ª       _grid.scss
ª   ª   ª       
ª   ª   +---link
ª   ª   ª       Link.jsx
ª   ª   ª       Link.stories.js
ª   ª   ª       _link.scss
ª   ª   ª       
ª   ª   +---Logo
ª   ª   ª       Logo.jsx
ª   ª   ª       Logo.stories.js
ª   ª   ª       _logo.scss
ª   ª   ª       
ª   ª   +---MultiSelect
ª   ª   ª       MultiSelect.jsx
ª   ª   ª       MultiSelect.stories.js
ª   ª   ª       _multiselect.scss
ª   ª   ª       
ª   ª   +---RadioButton
ª   ª   ª       RadioButton.jsx
ª   ª   ª       RadioButton.stories.js
ª   ª   ª       _radioButton.scss
ª   ª   ª       
ª   ª   +---RadioButtonGroup
ª   ª   ª       RadioButtonGroup.jsx
ª   ª   ª       RadioButtonGroup.stories.js
ª   ª   ª       _radioButtonGroup.scss
ª   ª   ª       
ª   ª   +---Search
ª   ª   ª       Search.jsx
ª   ª   ª       Search.stories.js
ª   ª   ª       _search.scss
ª   ª   ª       
ª   ª   +---Stepper
ª   ª   ª       Stepper.jsx
ª   ª   ª       Stepper.stories.js
ª   ª   ª       _stepper.scss
ª   ª   ª       
ª   ª   +---Switch
ª   ª   ª       Switch.jsx
ª   ª   ª       Switch.stories.js
ª   ª   ª       _switch.scss
ª   ª   ª       
ª   ª   +---Tab
ª   ª   ª       Tab.jsx
ª   ª   ª       Tab.stories.js
ª   ª   ª       _tab.scss
ª   ª   ª       
ª   ª   +---TabGroup
ª   ª   ª       TabsGroup.jsx
ª   ª   ª       TabsGroup.stories.js
ª   ª   ª       _tabsgroup.scss
ª   ª   ª       
ª   ª   +---Textfield
ª   ª   ª       Textfield.jsx
ª   ª   ª       Textfield.stories.js
ª   ª   ª       _textfield.scss
ª   ª   ª       
ª   ª   +---ThemeShowcase
ª   ª           ThemeShowcase.jsx
ª   ª           ThemeShowcase.stories.js
ª   ª           _themeShowcase.scss
ª   ª           
ª   +---Widgets
ª       +---TopValueCard
ª       ª       TopValueCard.jsx
ª       ª       TopValueCard.stories.js
ª       ª       _topValueCard.scss
ª       ª       
ª       +---WidgetOverview
ª       ª       WidgetOverview.jsx
ª       ª       WidgetOverview.stories.js
ª       ª       _widgetOverview.scss
ª       ª       
ª       +---WidgetSpend
ª               WidgetSpend.jsx
ª               WidgetSpend.stories.js
ª               _widgetSpend.scss
ª               
+---docs
ª       Configure.mdx
ª       
+---styles
ª   ª   main.scss
ª   ª   
ª   +---abstracts
ª           _functions.scss
ª           _mixins.scss
ª           _primitives.scss
ª           _template.scss
ª           _variables.scss
ª           
+---utils
        ChartDoughnutData.js
        ChartLineData.js
        CreativesData.js
        DashboardData.js
        FilterToolbarData.js
        themeColors.js
        
            # Documentation files
```

Created with love by Aleja Tellez ❤️❤️
https://www.mariaalejandratellez.com/
https://www.linkedin.com/in/alejatellezr/

With the support of Camilo Arguello 
https://www.linkedin.com/in/kmiloarguello/
https://camiloarguello.xyz
