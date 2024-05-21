'use client'

import { useContext } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { Search } from 'lucide-react'

import { AuthContext } from '@/context/AuthContext'

import { InputIcon } from '@/components/atoms/InputIcon'
import { ButtonSign } from '@/components/atoms/ButtonSign'
import { WrapperBtnsControll } from '@/components/molecules/WrapperBtnsControll'
import { ActionDropdownProfile } from '@/components/molecules/ActionDropdownProfile'

export function Header() {
  const pathName = usePathname()
  const navigation = useRouter()
  const { isLogged } = useContext(AuthContext)

  function handleNavigateLogin() {
    navigation.push('/login')
  }

  function handleNavigateSignUp() {
    navigation.push('/signup')
  }

  return (
    <header className="flex w-full items-center justify-between bg-zinc-950 px-6 py-2">
      <div className="flex w-2/4 items-center gap-4">
        <WrapperBtnsControll />
        {pathName === '/search' && (
          <InputIcon
            icon={Search}
            type="text"
            placeholder="What do you want to listen to?"
          />
        )}
      </div>
      {isLogged ? (
        <ActionDropdownProfile />
      ) : (
        <div className="flex w-1/3 items-center gap-6">
          <ButtonSign
            text="Sign up"
            variant="secundary"
            onClick={handleNavigateSignUp}
          />
          <ButtonSign
            text="Log in"
            variant="primary"
            onClick={handleNavigateLogin}
          />
        </div>
      )}
    </header>
  )
}
