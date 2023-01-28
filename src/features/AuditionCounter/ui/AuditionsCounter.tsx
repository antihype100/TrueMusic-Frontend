import {Headphones} from "../asstes/headphones";
import styles from './AuditionsCounter.module.scss'

interface IAuditionsCounter {
    usersAuditions: number,

}

export const AuditionsCounter = ({ usersAuditions}: IAuditionsCounter) => (
        <div className={styles.auditionsCounterWrapper}>
            <span className={styles.likeCounter}>{usersAuditions}</span>
            <Headphones />
        </div>
    )