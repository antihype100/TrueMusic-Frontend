import styles from './TrackProgressBar.module.scss'

interface ITrackProgressBar {
    value: string
}

export const TrackProgressBar = ({value}: ITrackProgressBar) => {
    return (
        <input className={`${styles.inputDuration} ${styles.sliderProgress}`} defaultValue={value} type='range' />
    )
}