import Image from 'next/image'
import Link from 'next/link'

import { tv, VariantProps } from 'tailwind-variants'
import { ICardDaily } from '@/dtos'

const tailVar = tv({
  base: [
    'flex h-68 w-52 flex-col items-center justify-between p-3 rounded overflow-hidden sm:h-64 md:w-full',
  ],
  variants: {
    variant: {
      primary: 'bg-white/5 hover:bg-white/10',
      secundary: 'bg-zinc-800 hover:bg-zinc-900/80',
    },
  },
})

interface IProps extends VariantProps<typeof tailVar> {
  data: ICardDaily
}

export function CardAudio({ data, variant }: IProps) {
  return (
    <Link className={tailVar({ variant })} href="#">
      <Image
        src={data.urlImage}
        alt={data.title}
        title={data.title}
        className="h-3/4 w-56 rounded sm:h-3/4 lg:h-2/3"
        width={380}
        height={380}
      />
      <div className="flex w-full flex-col items-start justify-center">
        <strong className="truncate text-xl font-semibold sm:text-base">
          {data.title}
        </strong>
        <span className="text-md text-ellipsis text-zinc-500 sm:text-sm">
          {data.description}
        </span>
      </div>
    </Link>
  )
}
