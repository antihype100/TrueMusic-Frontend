import {LikeIcon} from "../assets/LikeIcon";
import styles from './LikeCounter.module.scss'
import {likeActionWrapper} from "../api/likeAction";
import {useGlobalTrackStore} from "../../../widgets/Player/model/globalTrackStore";

interface ILikeCounter {
    usersLiked: number,
    trackId: number;
    isLiked: boolean | undefined,
}

export const LikeCounter = ({usersLiked, trackId, isLiked,}: ILikeCounter) => {

    const {globalTrackList, setGlobalTrackList, setTrackInfoGlobal, globalTrackInfo} = useGlobalTrackStore(state => state)
    const likeAction = likeActionWrapper(trackId, globalTrackList, setGlobalTrackList, setTrackInfoGlobal, globalTrackInfo)


    return (
        <div onClick={likeAction} className={styles.likeCounterWrapper}>
            <span>{usersLiked}</span>
            <LikeIcon isLiked={isLiked === undefined ? false : isLiked}/>
        </div>
    )
}