import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IRelease {
    albumName: string;
    descriptionAlbum: string;
    genre: string;
    formatRelease: string;
    coverFile: FormData | any;
}

interface IReleaseStore {
    release: IRelease | null;

    setRelease(release: IRelease): void;

    trackFileName: string | null;

    setTrackFileName(trackFileName: string | null): void;

}

const useReleaseStore = create<IReleaseStore>()(
    devtools(
        persist(
            (set) => ({
                release: null,
                setRelease: (release) => set(() => ({ release })),
                trackFileName: null,
                setTrackFileName: (trackFileName) => set(() => ({trackFileName }))

            }),
            {
                name: 'release-album',
            },
        ),
    ),
);

export { useReleaseStore };
