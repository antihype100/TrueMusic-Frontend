import {useEffect, useState} from "react";
import { logo } from '../../../../shared/helper/importSvg';
import styles from './LeftSideBar.module.scss';
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
            <img className={styles.logo} src={logo} alt='' />
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
