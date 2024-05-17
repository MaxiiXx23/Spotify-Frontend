import { BagdeSocialMedia } from '@/components/atoms/BagdeSocialMedia'
import { Facebook, Globe, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'

export function FooterMain() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-16 bg-zinc-950 px-32 py-16">
      <div className="flex w-full items-start justify-between">
        <a href="/">
          <Image
            src="/IconTransparent.svg"
            width={132}
            height={40}
            alt="icon-spotify"
          />
        </a>
        <div className="flex items-start justify-center gap-20">
          <div className="flex flex-col items-center justify-center gap-5">
            <strong className="text-base text-zinc-500">Company</strong>
            <nav className="flex flex-col items-center justify-center gap-4">
              <a href="#" className="text-white hover:text-zinc-400">
                About
              </a>
              <a href="#" className="text-white hover:text-zinc-400">
                Jobs
              </a>
              <a href="#" className="text-white hover:text-zinc-400">
                For the Record
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <strong className="text-base text-zinc-500">Communities</strong>
            <nav className="flex flex-col items-center justify-center gap-4">
              <a href="#" className="text-white hover:text-zinc-400">
                For Artists
              </a>
              <a href="#" className="text-white hover:text-zinc-400">
                Developers
              </a>
              <a href="#" className="text-white hover:text-zinc-400">
                Advertising
              </a>
              <a href="#" className="text-white hover:text-zinc-400">
                Investors
              </a>
              <a href="#" className="text-white hover:text-zinc-400">
                Vendors
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <strong className="text-base text-zinc-500">Useful links</strong>
            <nav className="flex flex-col items-center justify-center gap-4">
              <a href="#" className="text-white hover:text-zinc-400">
                Support
              </a>
              <a href="#" className="text-white hover:text-zinc-400">
                Web Player
              </a>
              <a href="#" className="text-white hover:text-zinc-400">
                Free Mobile App
              </a>
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BagdeSocialMedia href="#" icon={Instagram} />
          <BagdeSocialMedia href="#" icon={Twitter} />
          <BagdeSocialMedia href="#" icon={Facebook} />
        </div>
      </div>
      <div className="flex w-full items-end justify-between">
        <nav className="flex items-center gap-6">
          <a href="#" className="text-xs text-zinc-400 hover:text-white">
            Legal
          </a>
          <a href="#" className="text-xs text-zinc-400 hover:text-white">
            Privacy Center
          </a>
          <a href="#" className="text-xs text-zinc-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-zinc-400 hover:text-white">
            Cookies
          </a>
          <a href="#" className="text-xs text-zinc-400 hover:text-white">
            About Ads
          </a>
        </nav>
        <div className="flex flex-col items-start gap-3">
          <span className="flex items-center gap-2 text-xs text-zinc-400">
            <Globe /> USA (English)
          </span>
          <span className="text-xs text-zinc-400">© 2023 Spotify AB</span>
        </div>
      </div>
    </section>
  )
}
