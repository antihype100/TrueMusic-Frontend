import {IGlobalTrackInfo, ITrackResponse} from '@widgets/Player/model/playerStore';

export const setTrackWrapper = (
    id: number | undefined,
    setTrackInfoGlobal: (trackInfo: IGlobalTrackInfo) => void,
    trackList: IGlobalTrackInfo[] | undefined,
    setGlobalTrackList: (trackList: ITrackResponse[]) => void
) => () => {
        if (trackList) {
                const track = trackList.filter(track => track.id === id)
                const idx = trackList.indexOf(track[0])
                setTrackInfoGlobal({...trackList[idx], isPlay: true})
                setGlobalTrackList(trackList)
        }

}
