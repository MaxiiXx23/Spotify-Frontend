import { Ellipsis, Heart } from 'lucide-react'

import { ButtonAction } from '@/components/atoms/ButtonAction'
import { ButtonPlay } from '@/components/atoms/ButtonPlay'

export function WrapperActionsPlaylist() {
  return (
    <div className="flex items-center justify-center gap-4">
      <ButtonPlay variant="greenVisible" />
      <ButtonAction icon={Heart} label="Save To Your Library" type="button" />
      <ButtonAction icon={Ellipsis} label="More Options" type="button" />
    </div>
  )
}
