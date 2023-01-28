import {ReactNode, useEffect, useState} from 'react';
import styles from './TrackProgressBar.module.scss';

interface ITrackProgressBarProps {
    trackDuration: number,
    trackCurrentTime: number
    handleChange: (e: any) => void,
    LikeCounter?: ReactNode;

    AuditionsCounter?: ReactNode

}

export const TrackProgressBar = ({trackDuration, trackCurrentTime, handleChange, LikeCounter, AuditionsCounter}: ITrackProgressBarProps) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        setValue(trackCurrentTime)
    }, [trackCurrentTime]);

    return (
        <div className={styles.progressBarWrapper}>
            <div className={styles.progressBarTimeWrapper}>
                <span className={styles.trackCurrentTimeWrapper}>
                    <span className={styles.trackCurrentTime}>{
                        Math.floor(trackCurrentTime / 60).toString().padStart(2, '0')}:{Math.floor(trackCurrentTime % 60).toString().padStart(2, '0')}
                    </span>
                    {AuditionsCounter}
                    {LikeCounter}
                </span>
                <span className={styles.trackDuration}>
                    {Math.floor(trackDuration / 60).toString().padStart(2, '0')}:{Math.floor(trackDuration % 60).toString().padStart(2, '0')}
                </span>

            </div>
            <input
                className={`${styles.inputDuration} ${styles.sliderProgress}`}
                max={trackDuration}
                value={value}
                type='range'
                min={0}
                onChange={(e: any) => handleChange(e)}
            />
        </div>
    );
};