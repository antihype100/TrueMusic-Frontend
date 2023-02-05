import { TrackList } from '@features/TrackListSideBar/ui/TrackList/TrackList';
import {useEffect, useState} from "react";
import {getAllTracks} from "@shared/api/getAllTracks";
import {ITrackResponse} from "@widgets/Player/model/globalTrackStore";
import styles from './RightSideBar.module.scss';

export const RightSideBar = () => {

    const [trackList, setTrackList] = useState<ITrackResponse[]>([])
    const amountTracks = (window.screen.height / 50) / 4

    useEffect(() => {
        getAllTracks().then(res => {
            setTrackList(res.data)
        })
    }, [])

    return (
        <aside className={
            window.location.href.split('/').pop() === 'upload-track'
            ? styles.displayNone
                : styles.rightSideBar
        }>
            <TrackList amountTracks={amountTracks} title='Уходящая неделя' trackList={trackList}/>
            <TrackList amountTracks={amountTracks} title='Уходящий месяц' trackList={trackList}/>
        </aside>
    );
};


