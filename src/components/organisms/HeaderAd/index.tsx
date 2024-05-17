import Image from 'next/image'

export function HeaderAd() {
  return (
    <header className="flex w-full items-center justify-between bg-zinc-950 px-6 py-2">
      <a href="/">
        <Image
          src="/IconTransparent.svg"
          width={132}
          height={40}
          alt="icon-spotify"
        />
      </a>
      <nav className="flex w-[480px] items-center gap-6">
        <div className="flex items-center gap-8">
          <a href="/premium" className="text-white hover:text-white/80">
            Premium
          </a>
          <a href="#" className="text-white hover:text-white/80">
            Support
          </a>
          <a href="#" className="text-white hover:text-white/80">
            Download
          </a>
        </div>
        <div className="flex items-center gap-8 border-l border-white pl-8">
          <a href="#" className="text-white hover:text-white/80">
            Sign up
          </a>
          <a href="#" className="text-white hover:text-white/80">
            Log in
          </a>
        </div>
      </nav>
    </header>
  )
}
