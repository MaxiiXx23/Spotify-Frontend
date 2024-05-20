import { ElementType, forwardRef } from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon: ElementType
}

const ButtonAction = forwardRef<HTMLButtonElement, IProps>(
  ({ label, icon: Icon, ...rest }, ref) => {
    return (
      <div className="group relative flex flex-col items-center justify-center">
        <span className="invisible absolute -top-12 w-48 rounded bg-zinc-900 py-1 text-center group-hover:visible">
          {label}
        </span>
        <button
          className="text-zinc-400 outline-none group-hover:text-white"
          ref={ref}
          {...rest}
        >
          <Icon size={32} />
        </button>
      </div>
    )
  },
)

ButtonAction.displayName = 'Button'

export { ButtonAction }
