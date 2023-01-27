import {LikeIcon} from "../assets/LikeIcon";
import styles from './LikeCounter.module.scss'

export const LikeCounter = () => (
    <div className={styles.likeCounterWrapper}>
        <span>432</span>
        <LikeIcon/>
    </div>
)