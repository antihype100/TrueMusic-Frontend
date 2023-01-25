import create from 'zustand';
import { RefObject } from 'react';

export interface ITrackInfo {
    trackPath: string,
    trackName: string,
    authorName: string,
    duration: number,
    isPlay: boolean,
}

interface IGlobalTrackStore {
    trackInfoGlobal: ITrackInfo
    audioRefGlobal: RefObject<HTMLAudioElement> | null
    currentTime: number,

    setTrackInfoGlobal: (trackInfo: ITrackInfo) => void,
    setAudioRefGlobal: (ref: RefObject<HTMLAudioElement>) => void
    setCurrentTime: (currentTime: number) => void,
}

export const useGlobalTrackStore = create<IGlobalTrackStore>()(
    (set) => ({
        trackInfoGlobal: {
            trackName: 'Track',
            trackPath: '',
            authorName: 'Author',
            duration: 0,
            isPlay: false,
        },
        audioRefGlobal: null,
        currentTime: 0,

        setTrackInfoGlobal: (trackInfo) => set(() => ({ trackInfoGlobal: trackInfo })),
        setAudioRefGlobal: (ref) => set(() => ({ audioRefGlobal: ref })),
        setCurrentTime: (currentTime) => set(() => ({ currentTime})),

    }),
);
