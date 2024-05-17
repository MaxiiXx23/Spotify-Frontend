import { ElementType, ComponentProps } from 'react'

interface Iprops extends ComponentProps<'a'> {
  icon: ElementType
  text: string
}

export function NavItem({ icon: Icon, text, ...rest }: Iprops) {
  return (
    <a
      className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-zinc-200/80"
      {...rest}
    >
      <Icon />
      {text}
    </a>
  )
}
