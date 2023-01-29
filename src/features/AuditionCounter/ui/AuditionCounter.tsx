import {Headphones} from "../asstes/headphones";
import styles from './AuditionCounter.module.scss'

interface IAuditionCounter {
    usersAuditions: number,
    isAudition: boolean | undefined
}

export const AuditionCounter = ({ usersAuditions, isAudition}: IAuditionCounter) => (
        <div className={styles.auditionCounterWrapper}>
            <span className={styles.auditionCounter}>{usersAuditions}</span>
            <Headphones isAudition={isAudition !== undefined ? isAudition : false}/>
        </div>
    )