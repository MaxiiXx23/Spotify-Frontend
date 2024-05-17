import { ButtonIcon } from '@/components/atoms/ButtonIcon'
import { LinkInstallApp } from '@/components/atoms/LinkInstallApp'
import { InfosAsideMenu } from '@/components/molecules/InfosAsideMenu'
import { NavMain } from '@/components/molecules/NavMain'
import { NavOptionsList } from '@/components/molecules/NavOptionsList'
import { NavSuggest } from '@/components/molecules/NavSuggest'
import { WrapperStatus } from '@/components/molecules/WrapperStatus'
import { Globe } from 'lucide-react'

export function AsideMenu() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <WrapperStatus />
      <div className="flex w-full flex-col items-start justify-between gap-8">
        <NavMain />
        <div className=" no-scrollbar flex max-h-56 w-full flex-col items-start justify-between gap-8 overflow-y-auto">
          <NavOptionsList />
          <NavSuggest />
          <LinkInstallApp href="#" />
          <InfosAsideMenu />
        </div>
        <div>
          <ButtonIcon icon={Globe} text="English" variant="primary" />
        </div>
      </div>
    </aside>
  )
}
