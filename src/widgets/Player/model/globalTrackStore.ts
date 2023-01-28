import create from 'zustand';
import { RefObject } from 'react';

export interface ITrackResponse {
    isPlay?: boolean;
    albumId: number,
    authorName: string,
    createdAt: string,
    trackDescription: string,
    trackDuration: number,
    usersLiked: number;
    usersAuditions: number
    id: number;
    isLiked: boolean | undefined;
    isAudition: boolean | undefined
    trackProduction: string,
    trackName: string,
    trackPath: string,
    trackText: string,
    updatedAt: string,
}

export interface IGlobalTrackInfo extends ITrackResponse{
    coverPath?: string;
    isPlay?: boolean

}

export interface IGlobalTrackStore {
    globalTrackInfo: IGlobalTrackInfo
    audioRefGlobal: RefObject<HTMLAudioElement> | null
    trackCurrentTime: number,
    globalTrackList: ITrackResponse[],


    setTrackInfoGlobal: (trackInfo: IGlobalTrackInfo | ITrackResponse) => void,
    setAudioRefGlobal: (ref: RefObject<HTMLAudioElement>) => void
    setCurrentTime: (currentTime: number) => void,
    setGlobalTrackList: (trackList: ITrackResponse[]) => void,
}

export const useGlobalTrackStore = create<IGlobalTrackStore>()(
    (set) => ({
        globalTrackInfo: {
            trackName: 'Track',
            trackPath: '',
            usersLiked: 0,
            authorName: 'Author',
            trackDuration: 0,
            id: 0,
            isLiked: undefined,
            isAudition: undefined,
            isPlay: false,
            albumId: 0,
            createdAt: '',
            trackText: '',
            trackDescription: '',
            usersAuditions: 0,
            trackProduction: '',
            updatedAt: '',
        },
        audioRefGlobal: null,
        trackCurrentTime: 0,
        globalTrackList: [],


        setTrackInfoGlobal: (trackInfo) => set(() => ({ globalTrackInfo: trackInfo })),
        setAudioRefGlobal: (ref) => set(() => ({ audioRefGlobal: ref })),
        setCurrentTime: (trackCurrentTime) => set(() => ({ trackCurrentTime })),
        setGlobalTrackList: (trackList) => set(() => ({ globalTrackList: trackList })),

    }),
);
