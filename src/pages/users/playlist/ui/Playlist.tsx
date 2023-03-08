import React, { useEffect, useState } from 'react';
import TrackAlbumPlaylistCover from '@entities/TrackAlbumPlaylistCover/TrackAlbumPlaylistCover';
import { TrackList } from '@features/TrackList';
import { BaseLayout } from '@app/layouts/baseLayout/BaseLayout';
import { AuthorLayout } from '@app/layouts/authorLayout/AuthorLayout';
import { getAllTracks } from '@shared/api/getAllTracks';

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
                <TrackAlbumPlaylistCover
                    likes={23}
                    auditions={21}
                    title="Relax"
                    img="/track/cover/kizaru/ewrew/dwwd"
                    isLiked
                    isAudition

                />
                <TrackList/>
            </AuthorLayout>
        </BaseLayout>
    );
};
