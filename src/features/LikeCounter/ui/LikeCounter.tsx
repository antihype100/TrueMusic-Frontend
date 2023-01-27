import {useEffect, useState} from "react";
import {LikeIcon} from "../assets/LikeIcon";
import styles from './LikeCounter.module.scss'
import {likeActionWrapper} from "../api/likeAction";
import {getTrackInfoWrapper} from "../../../entities/Track/api/getTrackInfo";

interface ILikeCounter {
    usersLiked: number,
    trackId: number;
    isLiked?: boolean
}

export const LikeCounter = ({usersLiked, trackId, isLiked}: ILikeCounter) => {

    const [isLikedLocal, setIsLikedLocal] = useState(false)
    const likeAction = likeActionWrapper(trackId, setIsLikedLocal)
    const getTrackInfo = getTrackInfoWrapper(trackId, setIsLikedLocal)

    useEffect(() => {
        getTrackInfo()
    }, [trackId])


    return (
        <div onClick={likeAction} className={styles.likeCounterWrapper}>
            <span>{isLikedLocal ? usersLiked + 1 : usersLiked}</span>
            <LikeIcon isLiked={isLikedLocal}/>
        </div>
    )
}