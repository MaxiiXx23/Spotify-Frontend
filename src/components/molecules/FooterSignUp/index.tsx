import { ButtonSign } from '@/components/atoms/ButtonSign'

export function FooterSignUp() {
  return (
    <footer className="from-Fuchsia-850 to-Cyan-550 flex items-center justify-between gap-4  bg-gradient-to-r p-6">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-white">Preview of Spotify</h1>
        <h2 className="text-white">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </h2>
      </div>
      <div className="w-40">
        <ButtonSign text="Sign up free" variant="primary" />
      </div>
    </footer>
  )
}
