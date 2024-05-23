'use client'

import { useContext } from 'react'

import { FooterSignUp } from '@/components/molecules/FooterSignUp'
import { AsideMenu } from '@/components/organisms/AsideMenu'
import { FooterPlayer } from '@/components/organisms/FooterPlayer'
import { ListAudiosHome } from '@/components/templates/ListAudiosHome'
import { AuthContext } from '@/context/AuthContext'

export default function Home() {
  const { isLogged } = useContext(AuthContext)

  return (
    <main className="flex h-screen flex-col">
      <div className="relative flex flex-1  overflow-hidden">
        <AsideMenu />
        <ListAudiosHome />
      </div>
      {isLogged ? <FooterPlayer /> : <FooterSignUp />}
    </main>
  )
}
