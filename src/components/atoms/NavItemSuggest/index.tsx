import { ComponentProps } from 'react'

interface Iprops extends ComponentProps<'a'> {
  text: string
}

export function NavItemSuggest({ text, ...rest }: Iprops) {
  return (
    <a className="text-sm text-zinc-400 hover:text-zinc-100" {...rest}>
      {text}
    </a>
  )
}
