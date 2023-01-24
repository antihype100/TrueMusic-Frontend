import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../../../assets/sidebar/playlist/cover7.png';
import TrackAlbumPlaylistCover from '../../../entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import { MainPlaylist } from '../../../widgets/MainPlaylist';
import BaseLayout from '../../../app/layouts/baseLayout/BaseLayout';
import AuthorLayout from '../../../app/layouts/authorLayout/AuthorLayout';
import styles from './AlbumPage.module.scss';
import Comments from '../../../widgets/Comments/Comments';
import axios from '../../../shared/helper/axios';


const AlbumPage = () => {
    const { albumName, name } = useParams();
    const [trackList, setTrackList] = useState([])
    useEffect(() => {
        axios.get('track/all').then(res => {
            setTrackList(res.data)
        })
    }, [])

    return (
        <BaseLayout>
            <AuthorLayout author={name}>
                <div className={styles.albumPageContentWrapper}>
                    <TrackAlbumPlaylistCover img={img} likes={'241'} listening={'124001'} title={albumName} />
                    <MainPlaylist amountTracks={5} tracksList={trackList} />
                    <Comments />
                </div>
            </AuthorLayout>
        </BaseLayout>
    );
};

export default AlbumPage;
