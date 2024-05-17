import { ButtonHTMLAttributes } from 'react'

import { Play } from 'lucide-react'

import { tv, VariantProps } from 'tailwind-variants'

const tailVar = tv({
  base: ['w-12 h-12 flex items-center justify-center rounded-full  text-black'],
  variants: {
    variant: {
      green: 'ml-auto mr-6 bg-green-400 invisible group-hover:visible',
      white: 'bg-white hover:bg-white/90',
    },
  },
})

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tailVar> {}

export function ButtonPlay({ variant, ...rest }: IProps) {
  return (
    <button className={tailVar({ variant })} {...rest}>
      <Play fill="bg-black" />
    </button>
  )
}
