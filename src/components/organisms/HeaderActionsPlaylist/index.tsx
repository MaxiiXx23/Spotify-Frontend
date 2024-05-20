import { WrapperActionsPlaylist } from '@/components/molecules/WrapperActionsPlaylist'
import { List } from 'lucide-react'

export function HeaderActionsPlaylist() {
  return (
    <header className="flex w-full items-center justify-between py-2">
      <WrapperActionsPlaylist />
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-zinc-400 hover:text-white"
      >
        List <List />
      </button>
    </header>
  )
}
