import { useEffect, useState } from 'react';
import axios from '../../../shared/helper/axios';
import styles from './MainPlaylist.module.scss';
import { NavMenuTrackList } from '../../../features/NavMenuTrackList';
import { TrackList } from '../../../features/TrackList';



export const MainPLayList = () => {

    const [trackList, setTrackList] = useState([])

    useEffect(() => {
        axios.get('track/all').then(res => {
            setTrackList(res.data)
        })
    }, [])

    const amountTracks = window.screen.height > 1100 ? 8 : 6;

    return (
        <div className={styles.playlistWrapper}>
            <NavMenuTrackList />
            <TrackList amountTracks={amountTracks} tracksList={trackList} />
        </div>
    )
}