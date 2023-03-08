import React from 'react';
import styles from './TrackText.module.scss'


interface ITrackText {
    text: string
}
export const TrackText = ({text}: ITrackText) => (
        <div className={styles.textBody}>
            <div className={styles.text}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )