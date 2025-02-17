import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',

  backgroundColor: '$gray800',
  borderRadius: '$md',
  border: '1px solid $gray600',
})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
