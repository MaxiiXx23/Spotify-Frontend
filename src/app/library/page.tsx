import { CardAudio } from '@/components/molecules/CardAudio'
import { AsideMenu } from '@/components/organisms/AsideMenu'
import { FooterPlayer } from '@/components/organisms/FooterPlayer'
import { HeaderLibrary } from '@/components/organisms/HeaderLibrary'
import { ContainerLists } from '@/components/templates/ContainerLists'
import { playlists } from '@/database/playlists'

export default function Library() {
  return (
    <main className="flex h-screen flex-col">
      <div className="flex flex-1">
        <AsideMenu />
        <section className="flex flex-1 flex-col">
          <HeaderLibrary />
          <ContainerLists title="Playlists" variant="library" isLibrary>
            {playlists.map((item) => (
              <CardAudio key={item.id} data={item} variant="primary" />
            ))}
          </ContainerLists>
        </section>
      </div>
      <FooterPlayer />
    </main>
  )
}
