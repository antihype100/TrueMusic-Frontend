import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IRelease {
  albumName: string;
  descriptionAlbum: string;
  genre: string;
  formatRelease: string;
  coverFile: FormData
}

interface IReleaseStore {
  release: IRelease | null;
  setRelease(release: IRelease): void;
}

const useReleaseStore = create<IReleaseStore>()(
  devtools(
    persist(
      (set) => ({
        release: null,
        setRelease: (release) => set(() => ({ release })),
      }),
      {
        name: 'release-album',
      }
    )
  )
)

export { useReleaseStore };
