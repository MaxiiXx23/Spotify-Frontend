import { FooterSignUp } from '@/components/molecules/FooterSignUp'
import { Header } from '@/components/organisms/Header'
import { AsideMenu } from '@/components/organisms/AsideMenu'
import { CardCategory } from '@/components/atoms/CardCategory'
import { dataCategory } from '@/database/categories'
import { ContainerLists } from '@/components/templates/ContainerLists'

export default function Search() {
  return (
    <main className="flex h-screen flex-col">
      <div className="flex flex-1">
        <AsideMenu />
        <div className="flex flex-1 flex-col">
          <Header />
          <ContainerLists title="Browse all" variant="search" isLibrary={false}>
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
