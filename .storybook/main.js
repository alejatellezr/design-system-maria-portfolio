import path from "path";
/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/react-webpack5",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook",
    "storybook-dark-mode",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, "../stories/styles")], // update this!
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../stories"),
    });

    return config;
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
