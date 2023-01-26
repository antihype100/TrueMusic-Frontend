import { ITrackInfoGlobal, ITrackResponse } from '../model/globalTrackStore';

export const getPlayingTrackIndex = (globalTrackList: ITrackResponse[], trackInfoGlobal: ITrackInfoGlobal) => {
    const playingTrack = globalTrackList.filter(el => el.trackName === trackInfoGlobal.trackName && el.authorName === trackInfoGlobal.authorName)
    // @ts-ignore
    const playingTrackIdx = globalTrackList.indexOf(...playingTrack)
    return playingTrackIdx
}