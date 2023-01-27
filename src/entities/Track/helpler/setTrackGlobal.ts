import { ITrackInfoGlobal } from '../../../widgets/Player/model/globalTrackStore';

export const setTrackWrapper = (
    trackPath: string | undefined,
    setTrackInfoGlobal: (trackInfo: ITrackInfoGlobal) => void,
    trackInfoGlobal: ITrackInfoGlobal,
    trackName: string,
    authorName: string,
    trackDuration: number,
    coverPath?: string
) => () => {
        if (trackPath) {
            setTrackInfoGlobal({
                ...trackInfoGlobal,
                trackName,
                trackDuration,
                trackPath,
                coverPath,
                authorName,
                isPlay: true
            });
        }
    }