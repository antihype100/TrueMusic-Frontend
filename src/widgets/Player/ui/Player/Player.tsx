import styles from './Player.module.scss';
import { Track } from '../../../../entities/Track';
import { PlayPauseNextPrevButton } from '../PlayPauseNextPrevButton/PlayPauseNextPrevButton';
import { memo, useEffect, useRef } from 'react';
import { useGlobalTrackStore } from '../../model/globalTrackStore';

export const Player = () => {
    const { trackInfoGlobal} = useGlobalTrackStore(state => state);

    return (
        <div className={styles.player}>
            <div className={styles.contentWrapper}>
                <Audio trackPath={trackInfoGlobal.trackPath}/>
                <Track authorName={trackInfoGlobal.authorName} trackName={trackInfoGlobal.trackName} />
                <PlayPauseNextPrevButton />
            </div>
        </div>
    );
};

interface IAudio {
    trackPath: string
}

const Audio = memo(({trackPath}: IAudio) => {
    const audioRef = useRef(null);
    const setRef = useGlobalTrackStore(state => state.setAudioRefGlobal)
    const setCurrentTime = useGlobalTrackStore(state => state.setCurrentTime)
    setRef(audioRef)

    useEffect(() => {
        if (audioRef !== null) {
            // @ts-ignore
            audioRef.current.play()
        }
    })
    const onTimeUpdate = () => {
        // @ts-ignore
        setCurrentTime(audioRef.current.currentTime)
    }
    return (
        <audio onTimeUpdate={onTimeUpdate} ref={audioRef} src={trackPath} preload='metadata'></audio>
    )
})
