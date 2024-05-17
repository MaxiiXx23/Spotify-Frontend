import { ButtonPlay } from '@/components/atoms/ButtonPlay'
import { Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react'

export function PlayControll() {
  return (
    <div className="flex items-center gap-4">
      <Shuffle size={24} />
      <SkipBack size={24} />
      <ButtonPlay variant="white" />
      <SkipForward size={24} />
      <Repeat size={24} />
    </div>
  )
}
