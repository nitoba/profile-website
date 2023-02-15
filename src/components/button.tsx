import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { LoadingSpinner } from './loading'

const buttonVariants = cva(
  [
    'rounded-md',
    'flex',
    'items-center',
    'justify-center',
    'text-text-body',
    'p-3',
    'hover:brightness-75',
    'transition-all',
    'duration-300',
    'min-w-[100px]',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-red-500'],
      },
      full: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
      full: false,
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export function Button({
  intent,
  className,
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ intent, className })} {...props}>
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  )
}
