import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Heading = styled('p', {
  margin: 0,

  color: '$gray100',
  fontFamily: '$default',
  lineHeight: '$base',

  variants: {
    size: {
      sm: {
        fontSize: '$xl',
      },
      md: {
        fontSize: '$2xl',
      },
      lg: {
        fontSize: '$4xl',
      },
      xl: {
        fontSize: '$5xl',
      },
      '2xl': {
        fontSize: '$6xl',
      },
      '4xl': {
        fontSize: '$7xl',
      },
      '5xl': {
        fontSize: '$8xl',
      },
      '6xl': {
        fontSize: '$9xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = ComponentProps<typeof Heading>

Heading.displayName = 'Heading'
