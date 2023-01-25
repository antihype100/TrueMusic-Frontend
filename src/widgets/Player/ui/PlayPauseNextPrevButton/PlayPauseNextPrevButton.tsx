import styles from './PlayPauseNextPrevButton.module.scss'
import { Prev } from '../../assets/Prev';
import { Next } from '../../assets/Next';
import { Play } from '../../assets/Play';
import { useGlobalTrackStore } from '../../model/globalTrackStore';
import { Pause } from '../../assets/Pause';

export const PlayPauseNextPrevButton = () => {
    const { audioRefGlobal, trackInfoGlobal, setTrackInfoGlobal, globalTrackList } = useGlobalTrackStore(state => state)

    const playingTrack = globalTrackList.filter(el => el.trackName === trackInfoGlobal.trackName && el.authorName === trackInfoGlobal.authorName)
    // @ts-ignore
    const playingTrackIndex = globalTrackList.indexOf(...playingTrack)

    const nextTrack = (index: number) => {
        const {trackPath, trackName, authorName } = globalTrackList[index + 1]
        setTrackInfoGlobal({ ...trackInfoGlobal, trackName, trackPath, authorName, isPlay: true })
        setTimeout(() => audioRefGlobal?.current?.play(), 300)
    }

    const prevTrack = (index: number) => {
        const {trackPath, trackName, authorName } = globalTrackList[index - 1]
        setTrackInfoGlobal({ ...trackInfoGlobal, trackName, trackPath, authorName, isPlay: true })
        setTimeout(() => audioRefGlobal?.current?.play(), 300)
    }


    const playPause = () => {
        if (!trackInfoGlobal.isPlay) {
            console.log(audioRefGlobal, 'play');
            audioRefGlobal?.current?.play();
            setTrackInfoGlobal({ ...trackInfoGlobal, isPlay: true });
        } else {
            console.log(audioRefGlobal, 'pause');
            audioRefGlobal?.current?.pause();
            setTrackInfoGlobal({ ...trackInfoGlobal, isPlay: false });
        }
    }

    return (
        <div className={styles.playPauseNextPrevButtonWrapper}>
            <Prev onClick={() => prevTrack(playingTrackIndex)}/>
            {
                trackInfoGlobal.isPlay
                ? <Pause onClick={() => playPause()}/>
                : <Play onClick={() => playPause()}/>
            }

            <Next onClick={() => nextTrack(playingTrackIndex)}/>
        </div>
    )
}