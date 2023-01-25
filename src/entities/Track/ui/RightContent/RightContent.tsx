import styles from '../Track/Track.module.scss';
import { IRightContent } from '../../model/types';

export const RightContent = ({duration}: IRightContent) => {
    return (
        <div className={styles.rightContent}>
            <span className={styles.playerTrackDuration}>
                {Math.floor(duration / 60).toString().padStart(2, '0')}:{Math.floor(duration % 60).toString().padStart(2, '0')}
            </span>
        </div>
    );
};