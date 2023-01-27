import axios from "../../../shared/api/axios";

export const getTrackInfoWrapper = (
    trackId: number,
    setIsLiked: (value: boolean) => void,
) => () =>
    axios.get(`track/${trackId}`).then(res => {
        if (res.data.isLiked) {
            setIsLiked(true)
        }
    })