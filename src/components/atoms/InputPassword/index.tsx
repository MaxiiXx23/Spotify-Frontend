'use client'

import { Eye, EyeOff } from 'lucide-react'
import { ComponentProps, useState } from 'react'

interface IProps extends ComponentProps<'input'> {
  label: string
}

export function InputPassword({ label, ...rest }: IProps) {
  const [show, setShow] = useState<boolean>(false)

  function handleChangeTypeInput() {
    setShow((prev) => !prev)
  }

  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <strong className="text-sm text-black">{label}</strong>
      <div className=" flex w-full items-center justify-center gap-1 rounded border border-zinc-500 bg-white p-3 text-zinc-500 outline-none">
        <input
          className="w-full text-black outline-none placeholder:text-zinc-500"
          type={show ? 'text' : 'password'}
          {...rest}
        />
        <button type="button" onClick={handleChangeTypeInput}>
          {show ? <EyeOff /> : <Eye />}
        </button>
      </div>
    </div>
  )
}
