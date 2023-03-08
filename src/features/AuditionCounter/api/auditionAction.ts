import {IGlobalTrackInfo, ITrackResponse} from "@widgets/Player/model/playerStore";
import axios from "@shared/api/axios";

export const auditionActionWrapper = (
    trackId: number,
    globalTrackList: ITrackResponse[],
    setGlobalTrackList: (trackList: ITrackResponse[]) => void,
    setTrackInfoGlobal: (trackInfo: ITrackResponse) => void,
    globalTrackInfo: IGlobalTrackInfo
) => () => {
    axios.post(
        'track/audition',
        {trackId},
        {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => {
        const track: ITrackResponse[] = globalTrackList.filter(track => track.id === trackId)
        const idx = globalTrackList.indexOf(track[0])
        track[0].isAudition = true
        track[0].isPlay = true
        if (res.data.action === 'Audition added') {
            track[0].usersAuditions += 1
        }
        if (trackId === globalTrackInfo.id) {
            const newGlobalTrackLIst = [...globalTrackList.slice(0, idx), track[0], ...globalTrackList.slice(idx + 1)]
            setGlobalTrackList(newGlobalTrackLIst)
            setTrackInfoGlobal(track[0])
        }
    })
}