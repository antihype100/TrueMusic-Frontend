import React from 'react';
import {BASE_URL} from "@shared/api/axios";
import {AuditionCounter} from "@features/AuditionCounter";
import {LikeCounter} from "@features/LikeCounter";
import {IGlobalTrackInfo, usePlayerStore} from "@widgets/Player/model/playerStore";
import {setTrackWrapper} from "@entities/Track/helpler/setTrackGlobal";
import {playPauseWrapper} from "@entities/Track/helpler/playPause";
import styles from './TrackAlbumPlaylistCover.module.scss';

interface IPageCover {
    title?: string;
    img: string;
    likes: number;
    isLiked: boolean | undefined;
    auditions: number
    isAudition: boolean | undefined,
    trackId?: number,
    trackList?: IGlobalTrackInfo[]
}

const TrackAlbumPlaylistCover = (
    {
        img,
        likes,
        auditions,
        title,
        isLiked,
        isAudition,
        trackId,
        trackList,
    }: IPageCover) => {
    const {
        globalTrackInfo,
        audioRefGlobal,
        setTrackInfoGlobal,
        setGlobalTrackList
    } = usePlayerStore(state => state);

    const setTrack = setTrackWrapper(trackId, setTrackInfoGlobal, trackList, setGlobalTrackList)
    const playPause = playPauseWrapper(globalTrackInfo.trackName, globalTrackInfo, globalTrackInfo.authorName, setTrackInfoGlobal, audioRefGlobal)

    return (
        <div className={styles.coverWrapper}>
            <h2 className={styles.nameAlbum}>{title}</h2>
            <img
                src={`${BASE_URL}${img}`}
                className={styles.imgAlbum}
                alt="album"
                onClick={() => {
                    setTrack()
                    playPause()
                }}
            />
            <div className={styles.stats}>
                <div>
                    <LikeCounter usersLiked={likes} isLiked={isLiked} trackId={trackId}/>
                </div>
                <div>
                    <AuditionCounter isAudition={isAudition} usersAuditions={auditions}/>
                </div>
            </div>
        </div>
    );
};

export default TrackAlbumPlaylistCover;
