import create from 'zustand';
import { RefObject } from 'react';

export interface ITrackResponse {
    albumId: number,
    authorName: string,
    createdAt: string,
    descriptionTrack: string,
    duration: string,
    id: number,
    production: string,
    trackName: string,
    trackPath: string,
    trackText: string,
    updatedAt: string,
}

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
    indexInGlobalTrackList: number,
    globalTrackList: ITrackResponse[],


    setTrackInfoGlobal: (trackInfo: ITrackInfo) => void,
    setAudioRefGlobal: (ref: RefObject<HTMLAudioElement>) => void
    setCurrentTime: (currentTime: number) => void,
    setGlobalTrackList: (trackList: ITrackResponse[]) => void,
    nextTrack: () => void,
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
        globalTrackList: [],
        indexInGlobalTrackList: 0,


        setTrackInfoGlobal: (trackInfo) => set(() => ({ trackInfoGlobal: trackInfo })),
        setAudioRefGlobal: (ref) => set(() => ({ audioRefGlobal: ref })),
        setCurrentTime: (currentTime) => set(() => ({ currentTime })),
        setGlobalTrackList: (trackList) => set(() => ({ globalTrackList: trackList })),

        nextTrack: () => set(() => ({}))

    }),
);
