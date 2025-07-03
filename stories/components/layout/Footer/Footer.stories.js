import { fn } from '@storybook/test';
import { useDarkMode } from 'storybook-dark-mode';
import { Footer } from './Footer';

export default {
  title: 'layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    brandName: 'Curie Insights',
    currentYear: new Date().getFullYear(),
  },
};

// Story factory with dark mode awareness
const Template = (args) => {
  const isDark = useDarkMode();
  return <Footer {...args} scheme={isDark ? 'dark' : 'light'} />;
};
export const Default = Template.bind({});