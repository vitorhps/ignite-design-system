import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

const meta = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis dolores labore aspernatur accusantium eaque amet tenetur non rerum, sit ab expedita, nulla iusto assumenda iure vero. Atque, aspernatur dolore!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<TextProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    as: 'strong',
  },
}
