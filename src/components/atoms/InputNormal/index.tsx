import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'input'> {
  label: string
}

export function InputNormal({ label, ...rest }: IProps) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2">
      <strong className="text-sm text-black">{label}</strong>
      <input
        className="w-full rounded border border-zinc-500 bg-white p-3 text-black outline-none placeholder:text-zinc-500"
        {...rest}
      />
    </div>
  )
}
