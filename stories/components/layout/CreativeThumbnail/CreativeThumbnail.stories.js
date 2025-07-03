import { fn } from "@storybook/test";
import { useDarkMode } from "storybook-dark-mode";
import { CreativeThumbnail } from "./CreativeThumbnail";

export default {
  title: "layout/CreativeThumbnail",
  component: CreativeThumbnail,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    direction: "row",
    viewport: "desktop",
    status: "default",
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
  return <CreativeThumbnail {...args} />;
};

export const Desktop = Template.bind({});
Desktop.args = {
  direction: "row",
  viewport: "desktop",
  status: "default",
  CreativePosition: "1",
  creativeImagePath:
    "https://www.mariaalejandratellez.com/wp-content/uploads/2025/07/creative-image-portfolio-001.png",
  CreativeName: "Creative Name",
  CreativeCurrencyValue: "$",
  CreativeCurrencyAmount: "1000",
};
