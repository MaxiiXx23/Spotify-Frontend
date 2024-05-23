import { TimeAudio } from '@/components/atoms/TimeAudio'
import { AudioInfoPlay } from '@/components/molecules/AudioInfoPlay'
import { MoreAudioControll } from '@/components/molecules/MoreAudioControll'
import { PlayControll } from '@/components/molecules/PlayControll'

export function FooterPlayer() {
  return (
    <footer className="flex w-full items-center justify-between border-t border-zinc-700 bg-zinc-800 p-2 md:p-4 lg:p-6">
      <AudioInfoPlay
        urlImage="/Michael_Jackson_Thriller.jpg"
        alt="Music Thriller"
        title="Thriller"
        info={{ album: 'Thriller', title: 'Thriller Remastered' }}
      />

      <div className="flex w-full flex-col items-center gap-2">
        <PlayControll />
        <TimeAudio />
      </div>
      <MoreAudioControll />
    </footer>
  )
}
