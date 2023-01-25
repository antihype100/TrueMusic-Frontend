import styles from './TrackProgressBar.module.scss';
import { useEffect, useState } from 'react';

interface ITrackProgressBarProps {
    duration: number,
    currentTime: number
    handleChange: (e: any) => void
}

export const TrackProgressBar = ({ duration, currentTime, handleChange }: ITrackProgressBarProps) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        setValue(currentTime)
    }, [currentTime]);

    return (
        <input
            className={`${styles.inputDuration} ${styles.sliderProgress}`}
            max={100}
            value={value}
            type='range'
            min={0}
            onChange={(e: any) => handleChange(e)} />
    );
};