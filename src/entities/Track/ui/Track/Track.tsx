import img from '../../../../assets/sidebar/playlist/cover7.png';
import styles from './Track.module.scss';
import { TrackProgressBar } from '../../../../shared/ui/TrackProgressBar/TrackProgressBar';
import { LeftContent } from '../LeftContent/LeftContent';
import { RightContent } from '../RightContent/RightContent';
import { ITrackProps } from '../../model/types';
import { useGlobalTrackStore } from '../../../../widgets/Player/model/globalTrackStore';
import { useState } from 'react';

export const Track = ({ authorName, trackName, textColor, trackPosition, trackPath }: ITrackProps) => {
    const {
        trackInfoGlobal,
        setTrackInfoGlobal,
        audioRefGlobal
    } = useGlobalTrackStore(state => state);
    const [currentTime, setCurrentTime] = useState(0)

    const playPause = () => {
        console.log('trackName:', trackName);
        console.log(trackInfoGlobal);
        if ((trackName !== trackInfoGlobal.trackName) && trackPath) {
            setTrackInfoGlobal({
                ...trackInfoGlobal,
                trackName: trackName,
                trackPath: trackPath,
                authorName: authorName,
                duration: duration,
                isPaused: false
            });
            // @ts-ignore
            setTimeout(() => audioRefGlobal.current.play(), 300)
        }

        if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
            if (audioRefGlobal !== null && audioRefGlobal.current) {

                if (trackInfoGlobal.isPaused) {
                    audioRefGlobal.current.play();
                    setTrackInfoGlobal({ ...trackInfoGlobal, isPaused: false });
                } else {
                    audioRefGlobal.current.pause();
                    setTrackInfoGlobal({ ...trackInfoGlobal, isPaused: true });
                }
            }

        }
    };

    const handleChange = (e: any) => {
        if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
            if (audioRefGlobal !== null && audioRefGlobal.current) {
                setCurrentTime(e.target.value) ;
                console.log(10);
            }
        }
    };

    let duration = 0

    return (
        <div className={styles.playerTrack}>
            <p className={styles.numberPosition}>{trackPosition}</p>
            <img className={styles.img} src={img} alt='' onClick={playPause} />
            <div className={styles.contentAndInputWrapper}>
                <div className={styles.rightLeftContentWrapper}>
                    <LeftContent
                        textColor={textColor}
                        authorName={authorName}
                        trackName={trackName}
                        currentTime={currentTime}
                    />
                    <RightContent textColor={textColor} duration={duration} />
                </div>
                <TrackProgressBar currentTime={currentTime} duration={duration} onChange={handleChange} />
            </div>
        </div>
    );

};
