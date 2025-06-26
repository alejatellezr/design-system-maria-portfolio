/** @type { import('@storybook/react').Preview } */
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer } from './DocsContainer';
import '/stories/styles/main.scss';

// Optional: Keep globalTypes if you want the theme in toolbar
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

// Sync storybook-dark-mode with context.globals.theme
const withDarkModeSync = (Story, context) => {
  const isDark = useDarkMode();

  useEffect(() => {
    // Sync global theme manually (required for DocsContainer)
    const expected = isDark ? 'dark' : 'light';
    if (context.globals.theme !== expected) {
      window.__STORYBOOK_ADDONS_CHANNEL__?.emit('updateGlobals', {
        globals: { theme: expected },
      });
    }

    // Add a class to body for custom dark styling (optional)
    document.body.classList.toggle('x-dark-mode', isDark);
  }, [isDark]);

  return <Story {...context} />;
};

export const decorators = [withDarkModeSync];

const preview = {
  parameters: {
    darkMode: {
      current: 'light',
    },
    docs: {
      container: DocsContainer,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};
