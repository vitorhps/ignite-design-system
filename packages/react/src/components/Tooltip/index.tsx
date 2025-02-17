import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipContent, TooltipText } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  label: string
  children: React.ReactNode
}

export function Tooltip({ label, children, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={300}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent className="TooltipContent" {...props}>
            <TooltipText>{label}</TooltipText>
            <RadixTooltip.Arrow className="TooltipArrow" />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
