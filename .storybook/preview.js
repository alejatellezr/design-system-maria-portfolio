/** @type { import('@storybook/react').Preview } */
import '/stories/styles/main.scss';
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;