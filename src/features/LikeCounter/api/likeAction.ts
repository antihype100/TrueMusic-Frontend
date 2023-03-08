import {IGlobalTrackInfo, ITrackResponse} from "@widgets/Player/model/playerStore";
import axios from "@shared/api/axios";

export const likeActionWrapper = (
    trackId: number | undefined,
    globalTrackList: ITrackResponse[],
    setGlobalTrackList: (trackList: ITrackResponse[]) => void,
    setTrackInfoGlobal: (trackInfo: ITrackResponse) => void,
    globalTrackInfo: IGlobalTrackInfo,
    trackList: ITrackResponse[] | undefined,
    setTrackList: ((trackList: ITrackResponse[]) => void) | undefined,
    isPlayer: boolean | undefined,
) => () => {
    axios.post(
        'track/like',
        {trackId},
        {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then(res => {
        if (trackList && setTrackList) {
            const track: ITrackResponse[] = trackList.filter(track => track.id === trackId)
            const idx = trackList.indexOf(track[0])

            if (res.data.action === 'like') {
                track[0].isLiked = true
                track[0].usersLiked += 1
                if (isPlayer) {
                    setTrackInfoGlobal(track[0])
                    setGlobalTrackList([...globalTrackList.slice(0, idx), track[0], ...globalTrackList.slice(idx + 1)])
                }

                setTrackList([...trackList.slice(0, idx), track[0], ...trackList.slice(idx + 1)])
            } else {
                track[0].isLiked = false
                track[0].usersLiked -= 1
                if (isPlayer) {
                    setTrackInfoGlobal(track[0])
                    setGlobalTrackList([...globalTrackList.slice(0, idx), track[0], ...globalTrackList.slice(idx + 1)])
                }
                setTrackList([...trackList.slice(0, idx), track[0], ...trackList.slice(idx + 1)])
            }
        }
    })
}

