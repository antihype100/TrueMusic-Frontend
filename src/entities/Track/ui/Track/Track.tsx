import img from '../../../../assets/sidebar/playlist/cover7.png';
import styles from './Track.module.scss';
import { TrackProgressBar } from '../../../../shared/ui/TrackProgressBar/TrackProgressBar';
import { LeftContent } from '../LeftContent/LeftContent';
import { RightContent } from '../RightContent/RightContent';
import { ITrackProps } from '../../model/types';
import { useGlobalTrackStore } from '../../../../widgets/Player/model/globalTrackStore';
import { playPause } from '../../helpler/playPause';

export const Track = ({ authorName, trackName, textColor, trackPosition, trackPath }: ITrackProps) => {
    const {
        trackInfoGlobal,
        currentTime,
        setTrackInfoGlobal,
        audioRefGlobal,
    } = useGlobalTrackStore(state => state);

    const playPauseWrapper = () => {
        playPause(trackName, trackInfoGlobal, authorName, setTrackInfoGlobal, audioRefGlobal)
    };

    let currentTimeLocal = 0
    if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
        currentTimeLocal = currentTime
    }

    const setTrack = () => {
        if (trackPath) {
            setTrackInfoGlobal({
                ...trackInfoGlobal,
                trackName: trackName,
                trackPath: trackPath,
                authorName: authorName,
                isPlay: true
            });
        }
    };

    const handleChange = (e: any) => {
        if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
            if (audioRefGlobal !== null && audioRefGlobal.current) {
                audioRefGlobal.current.currentTime = e.target.value
            }
        }
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
                    <RightContent textColor={textColor} duration={100} />
                </div>
                <TrackProgressBar handleChange={handleChange} currentTime={currentTimeLocal} duration={100}/>
            </div>
        </div>
    );

};
