import Image from 'next/image'

export function InfosAsideMenu() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <a href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
          Legal
        </a>
        <a href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
          Privacy Center
        </a>
        <a href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
          Privacy Policy
        </a>
        <a href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
          About Ads
        </a>
        <Image
          src="/private.svg"
          width={24}
          height={32}
          alt="Simbol private"
          title="Private"
        />
      </div>
      <a href="#" className="text-xs text-zinc-400 hover:text-zinc-100">
        Cookies
      </a>
    </div>
  )
}
