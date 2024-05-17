import Image from 'next/image'
import Link from 'next/link'

import { tv, VariantProps } from 'tailwind-variants'
import { ICardDaily } from '@/dtos'

const tailVar = tv({
  base: [
    'flex h-64 flex-col items-center justify-between p-3 rounded overflow-hidden',
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
        className="h-2/3 w-full rounded"
        width={320}
        height={320}
      />
      <div className="flex w-full flex-col items-start justify-center">
        <strong className="truncate font-semibold">{data.title}</strong>
        <span className="text-ellipsis text-sm text-zinc-500">
          {data.description}
        </span>
      </div>
    </Link>
  )
}
