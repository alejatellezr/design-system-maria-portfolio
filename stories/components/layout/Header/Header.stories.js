import { fn } from '@storybook/test';
import { useDarkMode } from 'storybook-dark-mode';
import { Header } from './Header';

export default {
  title: 'layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

// Story factory with dark mode awareness
const Template = (args) => {
  const isDark = useDarkMode();
  return <Header {...args} scheme={isDark ? 'dark' : 'light'} />;
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Larissa Oliveira',
  },
};

export const LoggedOut = Template.bind({});
