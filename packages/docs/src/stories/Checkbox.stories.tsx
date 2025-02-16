import type { Meta, StoryObj } from '@storybook/react'

import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} satisfies Meta<CheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
