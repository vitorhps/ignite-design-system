import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  marginTop: '$1',

  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
})

export const Step = styled('div', {
  height: '$1',

  backgroundColor: '$gray600',
  borderRadius: '$px',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
