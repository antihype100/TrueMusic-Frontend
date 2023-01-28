import styles from './PlayPauseNextPrevButton.module.scss'
import { useGlobalTrackStore } from '../../model/globalTrackStore';
import { getPlayingTrackIndex } from '../../helper/getPlayingTrackIndex';
import { nextTrackWrapper, playPauseGlobalPlayerWrapper, prevTrackWrapper } from '../../helper/trackController';
import { Pause } from '../../assets/Pause';
import { Prev } from '../../assets/Prev';
import { Next } from '../../assets/Next';
import { Play } from '../../assets/Play';

export const PlayPauseNextPrevButton = () => {
    const { audioRefGlobal, globalTrackInfo, setTrackInfoGlobal, globalTrackList } = useGlobalTrackStore(state => state)

    const playingTrackIdx = getPlayingTrackIndex(globalTrackList, globalTrackInfo)

    const nextTrack = nextTrackWrapper(playingTrackIdx, globalTrackList, setTrackInfoGlobal, audioRefGlobal)
    const prevTrack = prevTrackWrapper(playingTrackIdx, globalTrackList, setTrackInfoGlobal, audioRefGlobal)
    const playPause = playPauseGlobalPlayerWrapper(audioRefGlobal, globalTrackInfo, setTrackInfoGlobal)


    return (
        <div className={styles.playPauseNextPrevButtonWrapper}>
            <Prev onClick={() => prevTrack()}/>
            {
                globalTrackInfo.isPlay
                ? <Pause onClick={() => playPause()}/>
                : <Play onClick={() => playPause()}/>
            }
            <Next onClick={() => nextTrack()}/>
        </div>
    )
}