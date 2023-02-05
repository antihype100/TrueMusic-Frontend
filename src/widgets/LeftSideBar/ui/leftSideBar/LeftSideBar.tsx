import {useEffect, useState} from "react";
import { TrackList } from '@features/TrackListSideBar/ui/TrackList/TrackList';
import {getAllTracks} from "@shared/api/getAllTracks";
import { NavMenu } from '@features/NavMenu';
import styles from './LeftSideBar.module.scss';
import nLogo from '../../../../assets/png/Frame 7.png'
import {ITrackResponse} from "../../../Player/model/globalTrackStore";

export const LeftSideBar = () => {
    const [trackList, setTrackList] = useState<ITrackResponse[]>([])

    useEffect(() => {
        getAllTracks().then(res => {
            setTrackList(res.data)
        })
    }, [])



    return (
        <aside className={styles.leftSideBar}>
            <img className={styles.logo} src={nLogo} alt='' />
            <NavMenu />
            <hr className={styles.leftSidebarHr} />
            <TrackList
                title='Ваш плейлист'
                trackList={trackList}
            />
        </aside>
    );
};
