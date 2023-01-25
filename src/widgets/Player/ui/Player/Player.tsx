import styles from './Player.module.scss';
import { Track } from '../../../../entities/Track';
import { PlayPauseNextPrevButton } from '../PlayPauseNextPrevButton/PlayPauseNextPrevButton';
import { memo, useRef } from 'react';
import { useGlobalTrackStore } from '../../model/globalTrackStore';

export const Player = () => {
    const { trackInfoGlobal, } = useGlobalTrackStore(state => state);

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
    setRef(audioRef)
    return (
        <audio ref={audioRef} src={trackPath}
               preload='metadata'></audio>
    )
})
