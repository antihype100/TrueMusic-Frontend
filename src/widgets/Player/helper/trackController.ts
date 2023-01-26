import { ITrackInfoGlobal, ITrackResponse } from '../model/globalTrackStore';
import { RefObject } from 'react';

export const playPauseWrapper = (
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
    trackInfoGlobal: ITrackInfoGlobal,
    setTrackInfoGlobal: (trackInfoGlobal: ITrackInfoGlobal) => void,
) => {
    return () => {
        if (!trackInfoGlobal.isPlay) {
            console.log(audioRefGlobal, 'play');
            audioRefGlobal?.current?.play();
            setTrackInfoGlobal({ ...trackInfoGlobal, isPlay: true });
        } else {
            console.log(audioRefGlobal, 'pause');
            audioRefGlobal?.current?.pause();
            setTrackInfoGlobal({ ...trackInfoGlobal, isPlay: false });
        }
    }
}


export const nextTrackWrapper = (
    playingTrackIdx: number,
    globalTrackList: ITrackResponse[],
    setTrackInfoGlobal: (trackInfoGlobal: ITrackInfoGlobal) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
    trackInfoGlobal: ITrackInfoGlobal
) => {
    return () => {
        const {trackPath, trackName, authorName } = globalTrackList[playingTrackIdx + 1]
        setTrackInfoGlobal({ ...trackInfoGlobal, trackName, trackPath, authorName, isPlay: true })
        setTimeout(() => audioRefGlobal?.current?.play(), 300)
    }
}

export const prevTrackWrapper = (
    playingTrackIdx: number,
    globalTrackList: ITrackResponse[],
    setTrackInfoGlobal: (trackInfoGlobal: ITrackInfoGlobal) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
    trackInfoGlobal: ITrackInfoGlobal
) => {
    return () => {
        const {trackPath, trackName, authorName } = globalTrackList[playingTrackIdx - 1]
        setTrackInfoGlobal({ ...trackInfoGlobal, trackName, trackPath, authorName, isPlay: true })
        setTimeout(() => audioRefGlobal?.current?.play(), 300)
    }
}


