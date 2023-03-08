import {ITrackResponse, usePlayerStore} from "@widgets/Player/model/playerStore";
import {LikeIcon} from "../assets/LikeIcon";
import styles from './LikeCounter.module.scss'
import {likeActionWrapper} from "../api/likeAction";

interface ILikeCounter {
    usersLiked: number,
    trackId: number | undefined;
    isLiked: boolean | undefined,
    trackList?: ITrackResponse[],
    setTrackList?: (trackList: ITrackResponse[]) => void,
    isPlayer?: boolean;


}

export const LikeCounter = (
    {
        usersLiked,
        trackId,
        isLiked,
        trackList,
        setTrackList,
        isPlayer
    }: ILikeCounter) => {

    const {globalTrackList, setGlobalTrackList, setTrackInfoGlobal, globalTrackInfo} = usePlayerStore(state => state)
    const likeAction = likeActionWrapper(
        trackId,
        globalTrackList,
        setGlobalTrackList,
        setTrackInfoGlobal,
        globalTrackInfo,
        trackList,
        setTrackList,
        isPlayer,
    )



    return (
        <div onClick={likeAction} className={styles.likeCounterWrapper}>
            <span className={styles.likeCounter}>{usersLiked}</span>
            <LikeIcon isLiked={isLiked === undefined ? false : isLiked}/>
        </div>
    )
}