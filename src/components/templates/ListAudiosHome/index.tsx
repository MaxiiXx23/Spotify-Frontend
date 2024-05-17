'use client'

import { useContext } from 'react'

import { Header } from '../../organisms/Header'
import { AuthContext } from '@/context/AuthContext'
import { HomeListLogged } from '../../organisms/HomeListLogged'
import { HomeListSignIn } from '@/components/organisms/HomeListSignIn'

export function ListAudiosHome() {
  const { isLogged } = useContext(AuthContext)

  return (
    <main className="flex flex-1 flex-col">
      <Header />
      {isLogged ? <HomeListLogged /> : <HomeListSignIn />}
    </main>
  )
}
