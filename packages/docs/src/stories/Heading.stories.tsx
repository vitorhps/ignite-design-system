import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@vitorhps-ignite-ui/react'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'This is a heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<HeadingProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    as: 'h1',
    children: 'H1 heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
