import {useEffect, useState} from "react";
import {Track} from '../../../entities/Track';
import styles from './TrackList.module.scss';
import {ITrackListProps} from '../model/types';
import {setTrackWrapper} from "../../../entities/Track/helpler/setTrackGlobal";
import {ITrackResponse, useGlobalTrackStore} from "../../../widgets/Player/model/globalTrackStore";
import {playPauseWrapper} from "../../../entities/Track/helpler/playPause";
import {LikeCounter} from "../../LikeCounter";
import {getAllTracks} from "../../../shared/api/getAllTracks";
import {AuditionCounter} from "../../AuditionCounter";


export const TrackList = ({amountTracks}: ITrackListProps) => {
    const {globalTrackInfo, audioRefGlobal, setTrackInfoGlobal, globalTrackList, setGlobalTrackList} = useGlobalTrackStore(state => state);
    const [trackList, setTrackList] = useState<ITrackResponse[]>([])

    useEffect(() => {
        getAllTracks().then(res => {
            if (res.data.length > 0) {
                setTrackList(res.data)
                setGlobalTrackList(res.data)
                setTrackInfoGlobal(res.data[0])
            }
        })
    }, [])
    const coverWidthHeight = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 50
    const fontSize = (window.screen.width - 480) / (1280 - 480) * (16 - 16) + 12

    return (
        <div className={styles.trackListWrapper}>
            <ul className={styles.trackList}>
                {trackList.map(({id, trackName, trackPath, authorName, usersLiked, isLiked, usersAuditions, isAudition}, index) => {
                    const setTrack = setTrackWrapper(id, setTrackInfoGlobal, globalTrackList)
                    const playPause = playPauseWrapper(trackName, globalTrackInfo, authorName, setTrackInfoGlobal, audioRefGlobal)

                    return (
                        <li className={styles.trackListItem} key={id}>
                            <Track
                                fontSize={fontSize}
                                coverWidthHeight={coverWidthHeight}
                                trackPath={trackPath}
                                playPause={playPause}
                                setTrack={setTrack}
                                trackPosition={index + 1}
                                authorName={authorName}
                                trackName={trackName}
                                AuditionsCounter={<AuditionCounter isAudition={isAudition} usersAuditions={usersAuditions}/>}
                                LikeCounter={<LikeCounter isLiked={isLiked} trackId={id} usersLiked={usersLiked}/>}
                            />
                        </li>
                    );
                }).slice(0, amountTracks)}
            </ul>
        </div>
    );
};
