import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@ignite-ui/react'

const meta = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/vitorhps.png',
    alt: 'Vitor Hugo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<AvatarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
