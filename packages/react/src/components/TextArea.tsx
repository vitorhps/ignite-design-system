import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  minHeight: 80,
  padding: '$3 $4',

  boxSizing: 'border-box',
  resize: 'vertical',

  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',

  backgroundColor: '$gray900',
  borderRadius: '$sm',
  border: '2px solid $gray900',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
