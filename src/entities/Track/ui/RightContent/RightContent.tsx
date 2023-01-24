import styles from '../Track/Track.module.scss';
import { IRightContent } from '../../model/types';

export const RightContent = ({duration}: IRightContent) => {
    return (
        <div className={styles.rightContent}>
            <span className={styles.playerTrackDuration}>
                {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
            </span>
        </div>
    );
};