import styles from './Player.module.scss';
import { Track } from '../../../../entities/Track';
import { PlayPauseNextPrevButton } from '../PlayPauseNextPrevButton/PlayPauseNextPrevButton';
import {Audio} from '../Audio/Audio';
import { useGlobalTrackStore } from '../../model/globalTrackStore';
import {TrackProgressBar} from "../../../../shared/ui/TrackProgressBar/TrackProgressBar";
import {changeProgressBar} from "../../../../entities/Track/helpler/changeProgressBar";
import {playPauseGlobalPlayerWrapper} from "../../helper/trackController";
import {LikeCounter} from "../../../../features/LikeCounter";


export const Player = () => {

    const { globalTrackInfo, trackCurrentTime, audioRefGlobal, setTrackInfoGlobal } = useGlobalTrackStore(state => state);
    const {authorName, trackName, trackPath, trackDuration, coverPath, id, usersLiked, isLiked} = globalTrackInfo

    const coverWidthHeight = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 75
    const fontSize = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 9

    const playPause = playPauseGlobalPlayerWrapper(audioRefGlobal, globalTrackInfo, setTrackInfoGlobal)
    const handleChange = changeProgressBar(authorName, globalTrackInfo, trackName, audioRefGlobal )


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
                    ProgressBar={
                    <TrackProgressBar
                        handleChange={handleChange}
                        trackCurrentTime={trackCurrentTime}
                        trackDuration={trackDuration}
                        LikeInGlobalPLayer={
                        <LikeCounter isLiked={isLiked} trackId={id} usersLiked={usersLiked}/>
                        }
                    />
                }
                />
                <PlayPauseNextPrevButton />
            </div>
        </div>
    );
};


