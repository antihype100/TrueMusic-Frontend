import styles from './TrackProgressBar.module.scss'

interface ITrackProgressBarProps {
    duration: number,
    currentTime: number,
    onChange: (e: any) => void
}

export const TrackProgressBar = ({duration, currentTime, onChange}: ITrackProgressBarProps) => {
    return (
        <input
            className={`${styles.inputDuration} ${styles.sliderProgress}`}
            max={duration}
            value={currentTime}
            type='range'
            min={0}
            onChange={(e: any) => onChange(e)}/>
    )
}