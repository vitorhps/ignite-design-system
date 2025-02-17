import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@vitorhps-ignite-ui/react'

const meta = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>This is a box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} satisfies Meta<BoxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    as: 'strong',
  },
}
