import { useGlobalTrackStore } from '../../../../widgets/Player/model/globalTrackStore';
import styles from './Track.module.scss';
import type { ITrackProps } from '../../model/types';
import { LeftContent } from '../LeftContent/LeftContent';
import { RightContent } from '../RightContent/RightContent';
import { TrackProgressBar } from '../../../../shared/ui/TrackProgressBar/TrackProgressBar';
import { playPause } from '../../helpler/playPause';
import { changeProgressBar } from '../../helpler/changeProgressBar';
import img from '../../../../assets/sidebar/playlist/cover7.png';
import { setTrackWrapper } from '../../helpler/setTrackGlobal';


export const Track = ({ authorName, trackName, textColor, trackPosition, trackPath, trackDuration = 100 }: ITrackProps) => {
    const {
        trackInfoGlobal,
        currentTime,
        setTrackInfoGlobal,
        audioRefGlobal,
    } = useGlobalTrackStore(state => state);

    const playPauseWrapper = () => {
        playPause(trackName, trackInfoGlobal, authorName, setTrackInfoGlobal, audioRefGlobal)
    };

    const setTrack = setTrackWrapper(trackPath, setTrackInfoGlobal, trackInfoGlobal, trackName, authorName)
    const handleChange = changeProgressBar(authorName, trackInfoGlobal, trackName, audioRefGlobal )

    let currentTimeLocal = 0
    if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
        currentTimeLocal = currentTime
    }

    return (
        <div className={styles.playerTrack}>
            <p className={styles.numberPosition}>{trackPosition}</p>
            <img className={styles.img} src={img} alt='' onClick={() => {
                setTrack();
                playPauseWrapper()
            }} />
            <div className={styles.contentAndInputWrapper}>
                <div className={styles.rightLeftContentWrapper}>
                    <LeftContent
                        textColor={textColor}
                        authorName={authorName}
                        trackName={trackName}
                        currentTime={currentTimeLocal}
                    />
                    <RightContent textColor={textColor} duration={trackDuration} />
                </div>
                <TrackProgressBar handleChange={handleChange} currentTime={currentTimeLocal} duration={trackDuration}/>
            </div>
        </div>
    );

};
