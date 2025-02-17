import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'
import { Text } from '../Text'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',

  borderRadius: '$sm',
  backgroundColor: '$gray900',

  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: slideDownAndFade,
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: slideLeftAndFade,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: slideUpAndFade,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: slideRightAndFade,
  },
})

export const TooltipText = styled(Text, {
  color: '$gray100',

  defaultVariants: {
    size: 'sm',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
