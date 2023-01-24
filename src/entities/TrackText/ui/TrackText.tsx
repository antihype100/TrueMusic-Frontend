import styles from './TrackText.module.scss'
import React from 'react';

export const TrackText = () => {
    return (
        <div className={styles.textBody}>
            <div className={styles.text}>
                {Array.from(Array(5).keys()).map((_, i) => (
                    <p key={i}>
                        Я посылаю людям message (hold on) Если берусь за дело — настоящий savage Не нужен challenge,
                        наношу огромный
                        damage (большой урон) Ты микроб, ты распыляешься на мелочь (пиу!)
                    </p>
                ))}
            </div>
        </div>
    );
};