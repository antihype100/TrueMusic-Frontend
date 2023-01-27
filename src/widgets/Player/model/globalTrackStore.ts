import create from 'zustand';
import { RefObject } from 'react';



export interface ITrackResponse {
    albumId: number,
    authorName: string,
    createdAt: string,
    trackDescription: string,
    trackDuration: number,
    id: number,
    trackProduction: string,
    trackName: string,
    trackPath: string,
    trackText: string,
    updatedAt: string,
}

export interface ITrackInfoGlobal {
    trackPath: string,
    coverPath?: string,
    trackName: string,
    authorName: string,
    trackDuration: number,
    isPlay: boolean,
}

export interface IGlobalTrackStore {
    trackInfoGlobal: ITrackInfoGlobal
    audioRefGlobal: RefObject<HTMLAudioElement> | null
    trackCurrentTime: number,
    indexInGlobalTrackList: number,
    globalTrackList: ITrackResponse[],


    setTrackInfoGlobal: (trackInfo: ITrackInfoGlobal) => void,
    setAudioRefGlobal: (ref: RefObject<HTMLAudioElement>) => void
    setCurrentTime: (currentTime: number) => void,
    setGlobalTrackList: (trackList: ITrackResponse[]) => void,
}

export const useGlobalTrackStore = create<IGlobalTrackStore>()(
    (set) => ({
        trackInfoGlobal: {
            trackName: 'Track',
            trackPath: '',
            authorName: 'Author',
            trackDuration: 0,
            isPlay: false,
        },
        audioRefGlobal: null,
        trackCurrentTime: 0,
        globalTrackList: [],
        indexInGlobalTrackList: 0,


        setTrackInfoGlobal: (trackInfo) => set(() => ({ trackInfoGlobal: trackInfo })),
        setAudioRefGlobal: (ref) => set(() => ({ audioRefGlobal: ref })),
        setCurrentTime: (trackCurrentTime) => set(() => ({ trackCurrentTime })),
        setGlobalTrackList: (trackList) => set(() => ({ globalTrackList: trackList })),

    }),
);
