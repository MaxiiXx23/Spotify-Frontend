import { FooterSignUp } from '@/components/molecules/FooterSignUp'
import { Header } from '@/components/organisms/Header'
import { AsideMenu } from '@/components/organisms/AsideMenu'
import { ListDaily } from '@/components/organisms/ListDaily'
import { podcastsBests, podcastsBestsByAuthor } from '@/database/podcasts'

export default function Podcasts() {
  return (
    <main className="flex h-screen flex-col">
      <div className="flex flex-1">
        <AsideMenu />
        <div className="flex flex-1 flex-col">
          <Header />
          <section className="no-scrollbar flex max-h-[480px] flex-col items-start gap-5 overflow-y-auto p-6">
            <strong className="text-lg text-white">
              {`Best Episodes - Editor's Picks`}
            </strong>
            <ListDaily data={podcastsBests} />
            <strong className="text-lg text-white">Best of: Brown Bag</strong>
            <ListDaily data={podcastsBestsByAuthor} />
          </section>
        </div>
      </div>
      <FooterSignUp />
    </main>
  )
}
