import styles from './Player.module.scss';
import {Track} from '../../../../entities/Track';
import {PlayPauseNextPrevButton} from '../PlayPauseNextPrevButton/PlayPauseNextPrevButton';
import {Audio} from '../Audio/Audio';
import {useGlobalTrackStore} from '../../model/globalTrackStore';
import {TrackProgressBar} from "../../../../shared/ui/TrackProgressBar/TrackProgressBar";
import {changeProgressBarWrapper} from "../../../../entities/Track/helpler/changeProgressBar";
import {playPauseGlobalPlayerWrapper} from "../../helper/trackController";
import {auditionActionWrapper, LikeCounter} from "../../../../features/LikeCounter";
import {AuditionCounter} from "../../../../features/AuditionCounter";


export const Player = () => {

    const {
        globalTrackInfo,
        trackCurrentTime,
        audioRefGlobal,
        setTrackInfoGlobal,
        setGlobalTrackList,
        globalTrackList
    } = useGlobalTrackStore(state => state);
    const {
        authorName,
        trackName,
        trackPath,
        trackDuration,
        coverPath,
        id,
        usersLiked,
        isLiked,
        usersAuditions,
        isAudition
    } = globalTrackInfo

    const coverWidthHeight = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 75
    const fontSize = (window.screen.width - 480) / (1280 - 480) * (17 - 16) + 10

    const playPause = playPauseGlobalPlayerWrapper(audioRefGlobal, globalTrackInfo, setTrackInfoGlobal)
    const handleChange = changeProgressBarWrapper(authorName, globalTrackInfo, trackName, audioRefGlobal)
    const auditionAction = auditionActionWrapper(id, globalTrackList, setGlobalTrackList, setTrackInfoGlobal, globalTrackInfo)


    if (!isAudition) {
        if (trackDuration / trackCurrentTime < 2) {
            auditionAction()
        }
    }

    return (
        <div className={styles.player}>
            <div className={styles.contentWrapper}>
                <Audio trackPath={trackPath}/>
                <Track
                    fontSize={fontSize}
                    coverWidthHeight={coverWidthHeight}
                    coverPath={coverPath}
                    trackDuration={trackDuration}
                    trackPath={trackPath}
                    authorName={authorName}
                    trackName={trackName}
                    playPause={playPause}
                    ProgressBar={<TrackProgressBar
                        handleChange={handleChange}
                        trackCurrentTime={trackCurrentTime}
                        trackDuration={trackDuration}
                        LikeCounter={<LikeCounter isLiked={isLiked} trackId={id} usersLiked={usersLiked}/>}
                        AuditionsCounter={<AuditionCounter isAudition={isAudition} usersAuditions={usersAuditions}/>}
                    />}
                />
                <PlayPauseNextPrevButton/>
            </div>
        </div>
    );
};


