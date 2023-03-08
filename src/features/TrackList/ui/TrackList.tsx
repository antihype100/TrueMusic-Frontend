import {Track} from '@entities/Track';
import {setTrackWrapper} from "@entities/Track/helpler/setTrackGlobal";
import {ITrackResponse, usePlayerStore} from "@widgets/Player/model/playerStore";
import {playPauseWrapper} from "@entities/Track/helpler/playPause";
import {useEffect, useState} from "react";
import axios from "@shared/api/axios";
import {useNavMenuTrackListStore} from "@features/NavMenuTrackList/model/useNavMenuTrackListStore";
import {LikeCounter} from "../../LikeCounter";
import styles from './TrackList.module.scss';
import {AuditionCounter} from "../../AuditionCounter";

export const TrackList = () => {
    const {globalTrackInfo, audioRefGlobal, setTrackInfoGlobal, setGlobalTrackList} = usePlayerStore(state => state);
    const [trackList, setTrackList] = useState<ITrackResponse[]>([])
    const {navLinkState} = useNavMenuTrackListStore(state => state)

    useEffect(() => {
        axios.get(navLinkState.apiPath, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then((res) => {
            setTrackList(res.data)
        })
    }, [navLinkState])

    const coverWidthHeight = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 50
    const fontSize = (window.screen.width - 480) / (1280 - 480) * (16 - 16) + 12
    return (
        <div className={styles.trackListWrapper}>
            <ul className={styles.trackList}>
                {trackList.map(({id, trackName, trackPath, authorName, usersLiked, isLiked, usersAuditions, isAudition}, index) => {
                    const setTrack = setTrackWrapper(id, setTrackInfoGlobal, trackList, setGlobalTrackList)
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
                                AuditionsCounter={
                                    <AuditionCounter
                                        isAudition={isAudition}
                                        usersAuditions={usersAuditions}
                                    />
                                }
                                LikeCounter={
                                    <LikeCounter
                                        isLiked={isLiked}
                                        trackId={id}
                                        usersLiked={usersLiked}
                                        trackList={trackList}
                                        setTrackList={setTrackList}
                                    />
                                }
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
