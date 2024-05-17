import { CardAudio } from '@/components/molecules/CardAudio'
import { ICardDaily } from '@/dtos'

interface IProps {
  data: ICardDaily[]
}

export function ListDaily({ data }: IProps) {
  return (
    <div className="mt-2 grid grid-cols-6 gap-4">
      {data.map((item) => (
        <CardAudio key={item.id} data={item} href="#" />
      ))}
    </div>
  )
}
