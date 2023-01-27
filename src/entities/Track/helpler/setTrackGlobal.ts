import { ITrackInfoGlobal } from '../../../widgets/Player/model/globalTrackStore';

export const setTrackWrapper = (
    trackPath: string | undefined,
    setTrackInfoGlobal: (trackInfo: ITrackInfoGlobal) => void,
    trackInfoGlobal: ITrackInfoGlobal,
    trackName: string,
    authorName: string,
    trackDuration: number,
    usersLiked: number,
    trackId: number,
    isLiked: boolean,
    coverPath?: string,
) => () => {
    if (trackPath) {
        setTrackInfoGlobal({
            ...trackInfoGlobal,
            trackName,
            trackDuration,
            trackPath,
            trackId,
            coverPath,
            usersLiked,
            isLiked,
            authorName,
            isPlay: true
        });
    }
}
