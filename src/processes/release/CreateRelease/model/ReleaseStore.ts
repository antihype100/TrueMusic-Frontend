import create from 'zustand';

export interface IRelease {
    albumName: string;
    descriptionAlbum: string;
    genre: string;
    formatRelease: string;
    coverData: FormData | any;
    coverPath: string
}

interface IReleaseStore {
    release: IRelease;

    setRelease(release: IRelease): void;

    trackFileName: string | null;

    setTrackFileName(trackFileName: string | null): void;
}

const useReleaseStore = create<IReleaseStore>()(
    (set) => ({
        release: {} as IRelease,
        setRelease: (release) => set(() => ({ release })),
        trackFileName: null,
        setTrackFileName: (trackFileName) => set(() => ({ trackFileName })),

    }),
);

export { useReleaseStore };
