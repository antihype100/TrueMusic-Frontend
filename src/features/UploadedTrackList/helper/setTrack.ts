import {IGlobalTrackInfo} from "@widgets/Player/model/playerStore";

export const setTrackWrapper = (
    setTrackInfoGlobal: (trackInfo: IGlobalTrackInfo) => void,
    globalTrackInfo: IGlobalTrackInfo,
    trackName: string,
    trackDuration: number,
    trackPath: string,
    authorName: string,
    coverPath: string
) => () => {
    setTrackInfoGlobal({...globalTrackInfo, isPlay: true, trackName, trackDuration, trackPath, authorName, coverPath});
}
