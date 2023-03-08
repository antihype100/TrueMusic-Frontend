import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {TrackList} from '@features/TrackList';
import {BaseLayout} from '@app/layouts/baseLayout/BaseLayout';
import {AuthorLayout} from '@app/layouts/authorLayout/AuthorLayout';
import TrackAlbumPlaylistCover from '@entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import Comments from '@features/Comments/Comments';
import {useAlbumPageStore} from "@pages/author/albumPage/model/useAlbumPageStore";
import axios from "@shared/api/axios";
import styles from './AlbumPage.module.scss';


export const AlbumPage = () => {
    const {albumName, name} = useParams();
    const {albumInfo, setAlbumInfo} = useAlbumPageStore(state => state)

    useEffect(() => {
        axios.get(`/album/${name}/${albumName}`).then(res => {
            setAlbumInfo(res.data)
        })
    }, [])

    return (
        <BaseLayout>
            <AuthorLayout author={name}>
                <div className={styles.albumPageContentWrapper}>
                    <TrackAlbumPlaylistCover
                        img={`/track/cover/${albumInfo.authorName}/${albumInfo.albumName}/dwwd`}
                        likes={albumInfo.usersLiked}
                        auditions={24}
                        title={albumName}
                        isLiked={albumInfo.isLiked}
                        isAudition
                    />
                    <div className={styles.trackListWrapper}>
                        <TrackList/>
                    </div>
                    <Comments/>
                </div>
            </AuthorLayout>
        </BaseLayout>
    );
};
