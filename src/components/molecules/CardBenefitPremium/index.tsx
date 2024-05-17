import Image from 'next/image'

interface IProps {
  urlImage: string
  title: string
  description: string
  alt: string
}

export function CardBenefitPremium({
  urlImage,
  title,
  alt,
  description,
}: IProps) {
  return (
    <li className="flex h-72 w-72 flex-col items-center justify-center gap-10">
      <Image src={urlImage} width={142} height={142} alt={alt} title={title} />
      <div className="flex flex-col items-center gap-3">
        <strong className="text-sm text-black">{title}</strong>
        <span className="text-center text-base text-black">{description}</span>
      </div>
    </li>
  )
}
