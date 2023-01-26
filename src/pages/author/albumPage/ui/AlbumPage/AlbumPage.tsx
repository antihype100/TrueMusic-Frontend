import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AlbumPage.module.scss';
import { TrackList } from '../../../../../features/TrackList';
import { BaseLayout } from '../../../../../app/layouts/baseLayout/BaseLayout';
import { AuthorLayout } from '../../../../../app/layouts/authorLayout/AuthorLayout';
import TrackAlbumPlaylistCover from '../../../../../entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import Comments from '../../../../../features/Comments/Comments';
import { getAllTracks } from '../../../../../shared/api/getAllTracks';
import img from '../../../../../assets/sidebar/playlist/cover7.png';


export const AlbumPage = () => {
    const { albumName, name } = useParams();
    const [trackList, setTrackList] = useState([])

    useEffect(() => {
        getAllTracks().then(res => {
            setTrackList(res.data)
        })
    }, [])

    return (
        <BaseLayout>
            <AuthorLayout author={name}>
                <div className={styles.albumPageContentWrapper}>
                    <TrackAlbumPlaylistCover img={img} likes={'241'} listening={'124001'} title={albumName} />
                    <TrackList amountTracks={5} tracksList={trackList} />
                    <Comments />
                </div>
            </AuthorLayout>
        </BaseLayout>
    );
};
