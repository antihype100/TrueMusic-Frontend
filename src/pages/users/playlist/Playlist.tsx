import React, { useEffect, useState } from 'react';
import TrackAlbumPlaylistCover from '../../../entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import img from '../../../assets/sidebar/playlist/cover7.png';
import { TrackList } from '../../../features/TrackList';
import BaseLayout from '../../../app/layouts/baseLayout/BaseLayout';
import AuthorLayout from '../../../app/layouts/authorLayout/AuthorLayout';
import axios from '../../../shared/helper/axios';


const Playlist = () => {

    const [trackList, setTrackList] = useState([])
    useEffect(() => {
        axios.get('track/all').then(res => {
            setTrackList(res.data)
        })
    }, [])
    return (
        <BaseLayout>
            <AuthorLayout>
                <TrackAlbumPlaylistCover img={img} likes={'241'} listening={'124001'} title={'Relax'} />
                <TrackList amountTracks={5} tracksList={trackList} />
            </AuthorLayout>
        </BaseLayout>
    );
};

export default Playlist;
