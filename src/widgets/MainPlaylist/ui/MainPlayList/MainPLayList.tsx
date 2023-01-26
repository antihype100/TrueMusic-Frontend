import { useEffect, useState } from 'react';
import styles from './MainPlaylist.module.scss';
import { NavMenuTrackList } from '../../../../features/NavMenuTrackList';
import { TrackList } from '../../../../features/TrackList';
import { useGlobalTrackStore } from '../../../Player/model/globalTrackStore';
import { getAllTracks } from '../../../../shared/api/getAllTracks';



export const MainPLayList = () => {

    const [trackList, setTrackList] = useState([])
    const setGlobalTrackList = useGlobalTrackStore(state => state.setGlobalTrackList)
    const globalTrackList = useGlobalTrackStore(state => state.globalTrackList)

    useEffect(() => {
        getAllTracks().then(res => {
            setTrackList(res.data)
            setGlobalTrackList(res.data)
        })
    }, [])

    const amountTracks = window.screen.height > 1100 ? 8 : 6;

    return (
        <div className={styles.playlistWrapper}>
            <NavMenuTrackList />
            <TrackList amountTracks={amountTracks} tracksList={globalTrackList} />
        </div>
    )
}