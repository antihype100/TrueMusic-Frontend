import {ITrackResponse} from "@widgets/Player/model/playerStore";
import axios from "@shared/api/axios";

export const likeActionWrapperV2 = (
    trackId: number,
    trackInfo: ITrackResponse,
    setTrackInfo: any
) => () => {
    axios.post(
        'track/like',
        {trackId},
        {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        }
    ).then((res) => {
        if (res.data.action === 'like') {
            // eslint-disable-next-line no-param-reassign
            trackInfo.isLiked = true
            // eslint-disable-next-line no-param-reassign
            trackInfo.usersLiked += 1
            setTrackInfo(trackInfo)
        }
        if (res.data.action === 'dislike') {
            // eslint-disable-next-line no-param-reassign
            trackInfo.isLiked = false
            // eslint-disable-next-line no-param-reassign
            trackInfo.usersLiked -= 1
            setTrackInfo(trackInfo)
        }
    })
}