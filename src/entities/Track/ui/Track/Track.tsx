import styles from './Track.module.scss';
import type {ITrackProps} from '../../model/types';
import {TrackInfo} from '../TrackInfo/TrackInfo';
import {baseUrl} from "../../../../shared/api/baseUrl";


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
        Like,
    }: ITrackProps) => (
    <div className={styles.trackWrapper}>
        <img
            width={coverWidthHeight}
            height={coverWidthHeight}
            className={styles.trackCover}
            src={coverPath || (trackPath ? `${baseUrl}/track/cover${trackPath}` : undefined)}
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
            <TrackInfo
                fontSize={fontSize}
                textColor={textColor}
                authorName={authorName}
                trackName={trackName}
            />
            {Like}
            {ProgressBar}
        </div>
    </div>
);
