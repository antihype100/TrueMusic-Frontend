import styles from './Track.module.scss';
import type {ITrackProps} from '../../model/types';
import {TrackInfo} from '../TrackInfo/TrackInfo';


export const Track = (
    {
        authorName,
        trackName,
        textColor,
        playPause,
        setTrack,
        trackPath,
        coverPath,
        coverWidthHeight,
        fontSize,
        ProgressBar,
        LikeCounter,
        AuditionsCounter
    }: ITrackProps) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL
    return (
        <div className={styles.trackWrapper}>
            <img
                width={coverWidthHeight}
                height={coverWidthHeight}
                className={styles.trackCover}
                src={coverPath || (trackPath ? `${BASE_URL}/track/cover${trackPath}` : undefined)}
                alt=''
                onClick={() => {
                    if (setTrack) {
                        setTrack();
                    }
                    if (playPause) {
                        playPause()
                    }
                }}
            />
            <div className={styles.contentAndInputWrapper}>
                <div className={styles.likeAndAuditionsAndTrackInfoWrapper}>
                    <TrackInfo
                        fontSize={fontSize}
                        textColor={textColor}
                        authorName={authorName}
                        trackName={trackName}
                    />
                    <div className={styles.likeAndAuditionsWrapper}>
                        {AuditionsCounter}
                        {LikeCounter}
                    </div>

                </div>
                {ProgressBar}
            </div>
        </div>
    )
}
