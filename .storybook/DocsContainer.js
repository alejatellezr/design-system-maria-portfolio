import React, { useEffect } from 'react';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';

export const DocsContainer = ({ context, children }) => {
  const isDark = context.globals?.theme === 'dark';
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    // Wait until iframe DOM is ready
    const iframe = document.getElementById('storybook-preview-iframe');
    if (!iframe) return;

    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc?.body) return;

    // Toggle custom class in iframe <body>
    iframeDoc.body.classList.toggle('x-dark-mode', isDark);
  }, [isDark]);

  return (
    <BaseContainer
      context={{
        ...context,
        parameters: {
          ...context.parameters,
          docs: {
            ...(context.parameters?.docs || {}),
            theme,
          },
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};
