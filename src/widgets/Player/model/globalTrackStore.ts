import create from 'zustand';
import { RefObject } from 'react';

interface ITrackInfo {
    trackPath: string,
    trackName: string,
    authorName: string,
    duration: number,
    isPaused: boolean,
    currentTime: number,

}

interface IGlobalTrackStore {
    trackInfoGlobal: ITrackInfo
    setTrackInfoGlobal: (trackInfo: ITrackInfo) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null
    setAudioRefGlobal: (ref: RefObject<HTMLAudioElement>) => void
}

export const useGlobalTrackStore = create<IGlobalTrackStore>()(
    (set) => ({
        trackInfoGlobal: {
            trackName: 'Track',
            trackPath: '',
            authorName: 'Author',
            duration: 0,
            isPaused: true,
            currentTime: 0,
        },
        audioRefGlobal: null,

        setTrackInfoGlobal: (trackInfo) => set(() => ({ trackInfoGlobal: trackInfo })),
        setAudioRefGlobal: (ref) => set(() => ({ audioRefGlobal: ref })),

    }),
);
