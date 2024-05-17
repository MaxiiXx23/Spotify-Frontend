import { Link } from '@/components/atoms/Link'
import { ActionDropdownProfile } from '@/components/molecules/ActionDropdownProfile'
import { WrapperBtnsControll } from '@/components/molecules/WrapperBtnsControll'

export function HeaderLibrary() {
  return (
    <header className="flex w-full items-center justify-between bg-zinc-950 px-6 py-2">
      <div className="flex w-2/4 items-center gap-5">
        <WrapperBtnsControll />
        <div className="flex items-center justify-center gap-4">
          <Link href="#" text="Playlists" variant="primary" />
          <Link href="#" text="Podcasts" variant="primary" />
          <Link href="#" text="Artists" variant="primary" />
          <Link href="#" text="Albums" variant="primary" />
        </div>
      </div>
      <div className="flex w-1/3 items-center justify-end gap-6">
        <ActionDropdownProfile />
      </div>
    </header>
  )
}
