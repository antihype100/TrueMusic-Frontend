import { ITrackInfoGlobal } from '../../../widgets/Player/model/globalTrackStore';

export const setTrackWrapper = (
    trackPath: string | undefined,
    setTrackInfoGlobal: (trackInfo: ITrackInfoGlobal) => void,
    trackInfoGlobal: ITrackInfoGlobal,
    trackName: string,
    authorName: string,
) => {
    return () => {
        if (trackPath) {
            setTrackInfoGlobal({
                ...trackInfoGlobal,
                trackName: trackName,
                trackPath: trackPath,
                authorName: authorName,
                isPlay: true
            });
        }
    };
}