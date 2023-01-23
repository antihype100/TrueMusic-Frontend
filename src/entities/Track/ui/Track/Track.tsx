import img from '../../../../assets/sidebar/playlist/cover7.png';
import styles from './Track.module.scss';
import type { ITrack } from '../../model/types';
import { TrackProgressBar } from '../../../../shared/ui/TrackProgressBar/TrackProgressBar';
import { LeftContent } from '../LeftContent/LeftContent';
import { RightContent } from '../RightContent/RightContent';

const Track = ({ authorName, trackName, duration, textColor }: ITrack) => {

    return (
        <div className={styles.playerTrack}>
            <img className={styles.img} src={img} alt='' />
            <div className={styles.contentAndInputWrapper}>
                <div className={styles.rightLeftContentWrapper}>
                    <LeftContent textColor={textColor} authorName={authorName} trackName={trackName}/>
                    <RightContent textColor={textColor} duration={duration}/>
                </div>
                <TrackProgressBar value={'40'} />
            </div>
        </div>
    );
};

export { Track };
