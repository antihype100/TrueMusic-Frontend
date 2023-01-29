import {useEffect, useState} from "react";
import styles from './LeftSideBar.module.scss';
import nLogo from '../../../../assets/png/Frame 7.png'
import { TrackList } from '../../../../features/TrackListSideBar/ui/TrackList/TrackList';
import { NavMenu } from '../../../../features/NavMenu';
import {getAllTracks} from "../../../../shared/api/getAllTracks";
import {ITrackResponse} from "../../../Player/model/globalTrackStore";

export const LeftSideBar = () => {
    const amountTracks = window.screen.height > 1100 ? 9 : 7;
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
            <hr className='sideBarHr' />
            <TrackList
                amountTracks={amountTracks}
                title='Ваш плейлист'
                trackList={trackList}
            />
        </aside>
    );
};
