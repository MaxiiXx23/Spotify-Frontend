'use client'

import { ComponentProps, useContext } from 'react'

import { CircleArrowDown } from 'lucide-react'
import { AuthContext } from '@/context/AuthContext'

interface Iprops extends ComponentProps<'a'> {}

const styledLogged =
  'flex items-center gap-4 text-zinc-400 hover:text-zinc-200/80 mt-2'
const styledNotLogged = 'hidden'

export function LinkInstallApp({ ...rest }: Iprops) {
  const { isLogged } = useContext(AuthContext)

  const styled = isLogged ? styledLogged : styledNotLogged

  return (
    <a className={styled} {...rest}>
      <CircleArrowDown />
      <strong className="0 text-sm">Install App</strong>
    </a>
  )
}
