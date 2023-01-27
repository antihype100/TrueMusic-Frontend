import {useEffect, useState} from "react";
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

    const { trackInfoGlobal, trackCurrentTime, audioRefGlobal, setTrackInfoGlobal } = useGlobalTrackStore(state => state);
    const {authorName, trackName, trackPath, trackDuration, coverPath, trackId, isLiked} = trackInfoGlobal
    const [usersLiked, setUsersLiked] = useState(0)
    const playPause = playPauseGlobalPlayerWrapper(audioRefGlobal, trackInfoGlobal, setTrackInfoGlobal)
    const handleChange = changeProgressBar(authorName, trackInfoGlobal, trackName, audioRefGlobal )

    const coverWidthHeight = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 75
    const fontSize = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 9

    useEffect(() => {
        setUsersLiked(trackInfoGlobal.usersLiked)
    }, [trackInfoGlobal])

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
                        <LikeCounter isLiked={isLiked} trackId={trackId} usersLiked={usersLiked}/>
                        }
                    />
                }
                />
                <PlayPauseNextPrevButton />
            </div>
        </div>
    );
};


