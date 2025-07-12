import { fn } from "@storybook/test";
import { useDarkMode } from "storybook-dark-mode";
import { TopValueCard } from "./TopValueCard";

export default {
  title: "layout/TopValueCard",
  component: TopValueCard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    direction: "column",
    viewport: "desktop",
    status: "positive",
    CreativePosition: "1",
    creativeImagePath:
      "https://www.mariaalejandratellez.com/wp-content/uploads/2025/07/creative-image-portfolio-001.png",
    CreativeName: "Creative Name",
    CreativeCurrencyValue: "$",
    CreativeCurrencyAmount: "1000",
  },
};

// Story factory with dark mode awareness
const Template = (args) => {
  const isDark = useDarkMode();
  return <TopValueCard {...args} />;
};

export const Positive = Template.bind({});
Positive.args = {
  direction: "column",
  viewpor: "desktop",
  status: "positive",
  TopCardTitle: "Total Spend",
  TopCardNote: "Compared to previous period ",
  TopCardPercentage: "15%",
  TopCardCurrencyValue: "$",
  TopCardCurrencyAmount: "1000",
};

export const Negative = {
  args: {
    direction: "column",
    viewpor: "desktop",
    status: "negative",
    TopCardTitle: "Total Spend",
    TopCardNote: "Compared to previous period ",
    TopCardPercentage: "15%",
    TopCardCurrencyValue: "$",
    TopCardCurrencyAmount: "1000",
  },
};
