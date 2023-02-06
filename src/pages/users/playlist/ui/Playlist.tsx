import React, { useEffect, useState } from 'react';
import TrackAlbumPlaylistCover from '@entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import { TrackList } from '@features/TrackList';
import { BaseLayout } from '@app/layouts/baseLayout/BaseLayout';
import { AuthorLayout } from '@app/layouts/authorLayout/AuthorLayout';
import { getAllTracks } from '@shared/api/getAllTracks';
import img from '../../../../assets/sidebar/playlist/cover7.png';

export const Playlist = () => {

    const [trackList, setTrackList] = useState([])
    useEffect(() => {
       getAllTracks().then(res => {
            setTrackList(res.data)
        })
    }, [])
    return (
        <BaseLayout>
            <AuthorLayout>
                <TrackAlbumPlaylistCover img={img} likes="241" listening="124001" title="Relax" />
                <TrackList apiPath={''}/>
            </AuthorLayout>
        </BaseLayout>
    );
};
