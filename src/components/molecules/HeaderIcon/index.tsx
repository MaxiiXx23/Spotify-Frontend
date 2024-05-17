import Image from 'next/image'

export function HeaderIcon() {
  return (
    <header className="flex w-full items-center justify-center border-b border-b-zinc-300 py-6">
      <a href="/">
        <Image src="/IconDark.svg" width={144} height={44} alt="Icon" />
      </a>
    </header>
  )
}
