import type { Meta, StoryObj } from '@storybook/react'

import { Text, Tooltip, TooltipProps } from '@vitorhps-ignite-ui/react'

const meta = {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    label: 'This is a tooltip',
    children: <Text style={{ display: 'inline-block' }}>Hover me</Text>,
  },
  argTypes: {
    children: { control: { disable: true } },
  },
} satisfies Meta<TooltipProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
