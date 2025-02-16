import type { Preview } from '@storybook/react'

import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
