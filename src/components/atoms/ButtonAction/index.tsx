import { ComponentProps, ElementType } from 'react'

interface IProps extends ComponentProps<'button'> {
  label: string
  icon: ElementType
}

export function ButtonAction({ label, icon: Icon, ...rest }: IProps) {
  return (
    <div className="group relative z-10 flex flex-col items-center justify-center">
      <span className="invisible absolute -top-12 w-48 rounded bg-zinc-900 py-1 text-center group-hover:visible">
        {label}
      </span>
      <button className=" text-zinc-400 group-hover:text-white" {...rest}>
        <Icon size={32} />
      </button>
    </div>
  )
}
