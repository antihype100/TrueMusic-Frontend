import {RefObject} from 'react';
import {ITrackInfoGlobal, ITrackResponse} from '../model/globalTrackStore';

export const playPauseGlobalPlayerWrapper = (
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
    trackInfoGlobal: ITrackInfoGlobal,
    setTrackInfoGlobal: (trackInfoGlobal: ITrackInfoGlobal) => void,
) => () => {
    if (!trackInfoGlobal.isPlay) {
        audioRefGlobal?.current?.play();
        setTrackInfoGlobal({...trackInfoGlobal, isPlay: true});
    } else {
        audioRefGlobal?.current?.pause();
        setTrackInfoGlobal({...trackInfoGlobal, isPlay: false});
    }
}


export const nextTrackWrapper = (
    playingTrackIdx: number,
    globalTrackList: ITrackResponse[],
    setTrackInfoGlobal: (trackInfoGlobal: ITrackInfoGlobal) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
    trackInfoGlobal: ITrackInfoGlobal
) => () => {
    const {trackPath, trackName, authorName} = globalTrackList[playingTrackIdx + 1]
    setTrackInfoGlobal({...trackInfoGlobal, trackName, trackPath, authorName, isPlay: true})
    setTimeout(() => audioRefGlobal?.current?.play(), 300)
}

export const prevTrackWrapper = (
    playingTrackIdx: number,
    globalTrackList: ITrackResponse[],
    setTrackInfoGlobal: (trackInfoGlobal: ITrackInfoGlobal) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
    trackInfoGlobal: ITrackInfoGlobal
) => () => {
    const {trackPath, trackName, authorName} = globalTrackList[playingTrackIdx - 1]
    setTrackInfoGlobal({...trackInfoGlobal, trackName, trackPath, authorName, isPlay: true})
    setTimeout(() => audioRefGlobal?.current?.play(), 300)
}


