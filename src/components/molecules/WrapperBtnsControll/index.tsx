import { ChevronLeft, ChevronRight } from 'lucide-react'

import { ButtonControll } from '@/components/atoms/ButtonControll'

export function WrapperBtnsControll() {
  return (
    <div className="flex items-center gap-3">
      <ButtonControll icon={ChevronLeft} />
      <ButtonControll icon={ChevronRight} />
    </div>
  )
}
