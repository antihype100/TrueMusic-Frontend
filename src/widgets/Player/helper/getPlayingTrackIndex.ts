import { IGlobalTrackInfo, ITrackResponse } from '../model/playerStore';

export const getPlayingTrackIndex = (globalTrackList: ITrackResponse[], trackInfoGlobal: IGlobalTrackInfo) => {
    const playingTrack = globalTrackList.filter(el => el.trackName === trackInfoGlobal.trackName && el.authorName === trackInfoGlobal.authorName)

    return globalTrackList.indexOf(playingTrack[0])
}