import styles from './PlayPauseNextPrevButton.module.scss'
import { Prev } from '../../assets/Prev';
import { Next } from '../../assets/Next';
import { Play } from '../../assets/Play';


export const PlayPauseNextPrevButton = () => {
    return (
        <div className={styles.playPauseNextPrevButtonWrapper}>
            <Prev onClick={() => {}}/>
            <Play onClick={() => {}}/>
            <Next onClick={() => {}}/>
        </div>
    )
}