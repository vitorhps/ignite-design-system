import type { Meta, StoryObj } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@vitorhps-ignite-ui/react'

const meta = {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} satisfies Meta<MultiStepProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Full: Story = {
  args: {
    currentStep: 4,
  },
}
