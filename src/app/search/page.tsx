import { FooterSignUp } from '@/components/molecules/FooterSignUp'
import { Header } from '@/components/organisms/Header'
import { AsideMenu } from '@/components/organisms/AsideMenu'
import { CardCategory } from '@/components/atoms/CardCategory'
import { dataCategory } from '@/database/categories'
import { ContainerLists } from '@/components/templates/ContainerLists'

export default function Search() {
  return (
    <main className="flex h-screen w-full flex-col">
      <div className="flex flex-1 overflow-y-auto lg:overflow-hidden">
        <AsideMenu />
        <div className="flex flex-1 flex-col ">
          <Header />
          <ContainerLists title="Browse all" variant="search" showTitle>
            {dataCategory.map((item) => (
              <CardCategory key={item.id} data={item} href="#" />
            ))}
          </ContainerLists>
        </div>
      </div>
      <FooterSignUp />
    </main>
  )
}
