import { IPlaylist } from '@/dtos'
import Image from 'next/image'

interface IProps extends Omit<IPlaylist, 'audios'> {}

export function HeaderInfoPlayList({ data }: IProps) {
  return (
    <header className="gap- flex h-52 w-full items-center justify-center gap-4 pb-4">
      <div className="flex h-full items-end justify-center">
        <Image
          src={data.urlImage}
          alt="Cover Playlist"
          title={data.title}
          width={480}
          height={480}
          className="h-40 w-44 rounded"
        />
      </div>
      <div className="flex h-full w-full flex-col items-start justify-start">
        <span className="text-sm">Playlist</span>
        <div className="flex h-full flex-col items-start justify-end gap-4">
          <h1 className="text-8xl font-bold text-white">{data.title}</h1>
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm text-zinc-400">{data.description}</span>
            <div className=" gap- flex w-full items-start justify-start">
              <div className="flex items-center gap-2">
                <Image
                  src="/SpotifyIcon.svg.png"
                  alt="Cover Playlist"
                  title="Playlist Jazz"
                  width={120}
                  height={120}
                  className="h-6 w-6 rounded"
                />
                <strong>Spotify</strong>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-white" />
                <span>{`${data.totalLikes} likes`} </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-white" />
                <span>{`${data.totalEntries} new entries`}</span>
                <div className="h-2 w-2 rounded-full bg-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
