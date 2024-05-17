'use client'

import Image from 'next/image'

interface IProps {
  titleCard: string
  urlImage: string
  bgCard: string
}

export function CardCategory({ titleCard, bgCard, urlImage }: IProps) {
  return (
    <a href="#">
      <li
        className="relative h-52 w-52 rounded-lg"
        style={{
          backgroundColor: bgCard,
        }}
      >
        <div className="flex flex-col items-start  p-4">
          <strong>{titleCard}</strong>
        </div>
        <Image
          className="absolute bottom-0 right-0"
          src={urlImage}
          width={100}
          height={100}
          alt="cover"
        />
      </li>
    </a>
  )
}
