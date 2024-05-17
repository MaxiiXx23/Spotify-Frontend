import { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const tailVar = tv({
  base: ['text-sm font-bold'],
  variants: {
    variant: {
      primary: 'rounded p-3 hover:bg-zinc-600',
    },
  },
})

interface IProps extends ComponentProps<'a'>, VariantProps<typeof tailVar> {
  text: string
}

export function Link({ text, variant, ...rest }: IProps) {
  return (
    <a className={tailVar({ variant })} {...rest}>
      {text}
    </a>
  )
}
