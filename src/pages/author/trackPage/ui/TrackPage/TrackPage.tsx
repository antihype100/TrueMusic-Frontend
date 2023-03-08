import {useParams} from 'react-router-dom';
import {BaseLayout} from '@app/layouts/baseLayout/BaseLayout';
import {AuthorLayout} from '@app/layouts/authorLayout/AuthorLayout';
import TrackAlbumPlaylistCover from '@entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import Comments from '@features/Comments/Comments';
import {TrackText} from '@shared/ui/TrackText';
import axios from "@shared/api/axios";
import {useEffect} from "react";
import {useTrackPageStore} from "@pages/author/trackPage/model/useTrackPageStore";
import {IGlobalTrackInfo} from "@widgets/Player/model/playerStore";
import styles from './TrackPage.module.scss';


export const TrackPage = () => {
    const {name, trackName} = useParams();
    const {trackInfo, setTrackInfo} = useTrackPageStore(state => state)

    useEffect(() => {
        axios.get(`track/${name}/${trackName}`, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then((res) => {
            delete res.data.album
            delete res.data.usersPlaylist
            setTrackInfo(res.data)
        })
    }, [])

    return (
        <BaseLayout>
            <AuthorLayout author={name}>
                <div className={styles.trackPageContentWrapper}>
                    <TrackAlbumPlaylistCover
                        img={`/track/cover/${trackInfo.authorName}/${trackInfo.albumName}/dwedwq`}
                        likes={trackInfo.usersLiked}
                        auditions={trackInfo.usersAuditions}
                        title={trackName}
                        isLiked={trackInfo.isLiked}
                        isAudition={trackInfo.isAudition}
                        trackId={trackInfo.id}
                        trackList={[trackInfo] as IGlobalTrackInfo[]}
                    />
                    <TrackText text={trackInfo.trackText}/>
                    <Comments/>
                </div>
            </AuthorLayout>
        </BaseLayout>
    );
};

