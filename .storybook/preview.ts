import type { Preview } from '@storybook/react';
import '../src/reset.css';
import '../src/variables.css';
import '../src/global.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: 'hsl(229, 28%, 19%)',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
