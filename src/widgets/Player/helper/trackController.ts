import {RefObject} from 'react';
import {IGlobalTrackInfo, ITrackResponse} from '../model/playerStore';

export const playPauseGlobalPlayerWrapper = (
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
    globalTrackInfo: IGlobalTrackInfo,
    setTrackInfoGlobal: (globalTrackInfo: IGlobalTrackInfo) => void,
) => () => {
    if (!globalTrackInfo.isPlay) {
        audioRefGlobal?.current?.play();
        setTrackInfoGlobal({...globalTrackInfo, isPlay: true});
    } else {
        audioRefGlobal?.current?.pause();
        setTrackInfoGlobal({...globalTrackInfo, isPlay: false});
    }
}


export const nextTrackWrapper = (
    setCurrentTime: (currentTime: number) => void,
    playingTrackIdx: number,
    globalTrackList: ITrackResponse[],
    setTrackInfoGlobal: (globalTrackInfo: IGlobalTrackInfo) => void,
    audioRefGlobal?: RefObject<HTMLAudioElement> | null,
) => () => {
    if (playingTrackIdx < globalTrackList.length - 1) {
        setCurrentTime(0)
        setTrackInfoGlobal({...globalTrackList[playingTrackIdx + 1], isPlay: true})
        setTimeout(() => audioRefGlobal?.current?.play(), 300)
    }


}

export const prevTrackWrapper = (
    setCurrentTime: (currentTime: number) => void,
    playingTrackIdx: number,
    globalTrackList: ITrackResponse[],
    setTrackInfoGlobal: (globalTrackInfo: IGlobalTrackInfo) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
) => () => {
    if (playingTrackIdx > 0) {
        setCurrentTime(0)
        setTrackInfoGlobal({...globalTrackList[playingTrackIdx - 1], isPlay: true})
        setTimeout(() => audioRefGlobal?.current?.play(), 300)
    }

}


