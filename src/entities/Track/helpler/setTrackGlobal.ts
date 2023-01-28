import {IGlobalTrackInfo, ITrackResponse} from '../../../widgets/Player/model/globalTrackStore';

export const setTrackWrapper = (
    id: number,
    setTrackInfoGlobal: (trackInfo: IGlobalTrackInfo) => void,
    globalTrackList: ITrackResponse[],
) => () => {
    const track = globalTrackList.filter(track => track.id === id)
    const idx = globalTrackList.indexOf(track[0])
    setTrackInfoGlobal({...globalTrackList[idx], isPlay: true});
}
