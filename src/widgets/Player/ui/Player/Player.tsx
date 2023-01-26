import styles from './Player.module.scss';
import { Track } from '../../../../entities/Track';
import { PlayPauseNextPrevButton } from '../PlayPauseNextPrevButton/PlayPauseNextPrevButton';
import {Audio} from '../Audio/Audio';
import { useGlobalTrackStore } from '../../model/globalTrackStore';


export const Player = () => {
    const { trackInfoGlobal } = useGlobalTrackStore(state => state);

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


