import { useParams } from 'react-router-dom';
import React from 'react';
import styles from './TrackPage.module.scss';
import img from '../../../assets/sidebar/playlist/cover7.png';
import TrackAlbumPlaylistCover from '../../../entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import BaseLayout from '../../../app/layouts/baseLayout/BaseLayout';
import AuthorLayout from '../../../app/layouts/authorLayout/AuthorLayout';
import Comments from '../../../features/Comments/Comments';
import { TrackText } from '../../../entities/TrackText';

export const TrackPage = () => {
    const { name, trackName } = useParams();
    return (
        <BaseLayout>
            <AuthorLayout author={name}>
                <div className={styles.trackPageContentWrapper}>
                    <TrackAlbumPlaylistCover img={img} likes={'234324'} listening={'23423'} title={trackName} />
                    <TrackText />
                    <Comments />
                </div>
            </AuthorLayout>
        </BaseLayout>
    );
};

