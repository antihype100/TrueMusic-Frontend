import axios from "../../../shared/api/axios";

export const likeActionWrapper = (
    trackId: number,
    setIsLiked: (value: boolean) => void,
) => () =>
    axios.post('track/like', {
        trackId
    }).then(res => {
        if (res.data.action === 'like') {
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }
    })
