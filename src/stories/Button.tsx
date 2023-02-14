import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

export type ButtonVariants = VariantProps<typeof button>
const button = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: ['bg-[#555ab9]', 'text-white', 'border-transparent', 'hover:bg-[#454aa9]'],
      secondary: ['bg-white', 'text-gray-600', 'border-gray-700', 'hover:bg-gray-100'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-lg', 'py-3', 'px-6'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

export const Button = ({
  intent = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => (
  <button type='button' className={button({ intent, size, className })} {...props} />
)
