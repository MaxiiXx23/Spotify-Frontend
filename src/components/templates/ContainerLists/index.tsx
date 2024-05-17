import { CardLiked } from '@/components/atoms/CardLiked'
import { ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const tailVar = tv({
  base: ['no-scrollbar mb-2 grid max-h-96 gap-6 overflow-y-auto'],
  variants: {
    variant: {
      search: 'grid-cols-4',
      library: 'grid-cols-6',
    },
  },
})

interface IProps extends VariantProps<typeof tailVar> {
  title: string
  children: ReactNode
  isLibrary: boolean
}

export function ContainerLists({
  title,
  isLibrary,
  variant,
  children,
}: IProps) {
  return (
    <section className="mt-6 flex flex-1 flex-col items-start gap-5 pl-6 pr-6 pt-6">
      <strong className="text-lg text-white">{title}</strong>
      <ul className={tailVar({ variant })}>
        {isLibrary && <CardLiked />}
        {children}
      </ul>
    </section>
  )
}
