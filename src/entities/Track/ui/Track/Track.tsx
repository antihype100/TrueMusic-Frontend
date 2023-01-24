import img from '../../../../assets/sidebar/playlist/cover7.png';
import styles from './Track.module.scss';
import { TrackProgressBar } from '../../../../shared/ui/TrackProgressBar/TrackProgressBar';
import { LeftContent } from '../LeftContent/LeftContent';
import { RightContent } from '../RightContent/RightContent';
import { useEffect, useRef, useState } from 'react';
import { ITrackProps } from '../../model/types';

export const Track = ({ authorName, trackName, textColor, trackPath, trackPosition }: ITrackProps) => {
    const [isPaused, setIsPaused] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.ontimeupdate = handleTimeUpdate;
            audioRef.current.onloadedmetadata = handleLoadedMetadata;
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.ontimeupdate = null;
                audioRef.current.onloadedmetadata = null;
            }
        };
    }, [audioRef.current]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }

    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }

    };

    const handleChange = (e: any) => {
        if (audioRef.current) {
            audioRef.current.currentTime = e.target.value;
        }

    };
    const playPause = () => {
        if (audioRef !== null) {
            if (isPaused) {
                // @ts-ignore
                audioRef.current.play();
                setIsPaused(false);
            } else {
                // @ts-ignore
                audioRef.current.pause();
                setIsPaused(true);
            }
        }
    };

    return (
        <>
            <audio ref={audioRef} src={trackPath} preload='metadata'></audio>
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
        </>
    );

};