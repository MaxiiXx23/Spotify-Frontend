import { AsideMenu } from '@/components/organisms/AsideMenu'
import { FooterPlayer } from '@/components/organisms/FooterPlayer'
import { ListAudiosHome } from '@/components/templates/ListAudiosHome'

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <div className="flex flex-1  overflow-hidden">
        <AsideMenu />
        <ListAudiosHome />
      </div>
      <FooterPlayer />
    </main>
  )
}
