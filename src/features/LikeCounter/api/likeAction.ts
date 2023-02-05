import {IGlobalTrackInfo, ITrackResponse} from "@widgets/Player/model/globalTrackStore";
import axios from "@shared/api/axios";

export const likeActionWrapper = (
    trackId: number,
    globalTrackList: ITrackResponse[],
    setGlobalTrackList: (trackList: ITrackResponse[]) => void,
    setTrackInfoGlobal: (trackInfo: ITrackResponse ) => void,
    globalTrackInfo: IGlobalTrackInfo
) => () => {

    axios.post(
        'track/like',
        {trackId},
        {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => {
        const track: ITrackResponse[] = globalTrackList.filter(track => track.id === trackId)
        const idx = globalTrackList.indexOf(track[0])

        if (res.data.action === 'like') {
            track[0].isLiked = true
            track[0].usersLiked += 1
            if (trackId === globalTrackInfo.id) {
                setTrackInfoGlobal(track[0])
            }
            const newGlobalTrackLIst = [...globalTrackList.slice(0, idx), track[0], ...globalTrackList.slice(idx + 1)]
            setGlobalTrackList(newGlobalTrackLIst)
        } else {
            track[0].isLiked = false
            track[0].usersLiked -= 1
            if (trackId === globalTrackInfo.id) {
                setTrackInfoGlobal(track[0])
            }
            const newGlobalTrackLIst = [...globalTrackList.slice(0, idx), track[0], ...globalTrackList.slice(idx + 1)]
            setGlobalTrackList(newGlobalTrackLIst)
        }
    })
}

