import {useEffect, useState} from "react";
import styles from './TrackList.module.scss';
import {arrow} from '../../../../shared/helper/importSvg';
import {getAllTracks} from "../../../../shared/api/getAllTracks";
import {Track} from "../../../../entities/Track";
import {setTrackWrapper} from "../../../../entities/Track/helpler/setTrackGlobal";
import {playPauseWrapper} from "../../../../entities/Track/helpler/playPause";
import {useGlobalTrackStore} from "../../../../widgets/Player/model/globalTrackStore";

interface IPlaylistSideBar {
    amountTracks: number;
    title: string;
}

export const TrackList = ({amountTracks, title}: IPlaylistSideBar) => {
    const {trackInfoGlobal, audioRefGlobal, setTrackInfoGlobal} = useGlobalTrackStore(state => state);
    const [trackListState, setTrackListState] = useState([])
    const coverWidthHeight = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 50


    useEffect(() => {
        getAllTracks().then(res => {
            setTrackListState(res.data)
        })
    }, [])

    const trackList = trackListState.map(({authorName, trackName, trackPath, id, trackDuration}) => {
        const setTrack = setTrackWrapper(trackPath, setTrackInfoGlobal, trackInfoGlobal, trackName, authorName, trackDuration)
        const playPause = playPauseWrapper(trackName, trackInfoGlobal, authorName, setTrackInfoGlobal, audioRefGlobal)
        return (
            <li className={styles.trackListItem} key={id}>
                <Track
                    fontSize={15}
                    coverWidthHeight={coverWidthHeight}
                    trackPath={trackPath}
                    authorName={authorName}
                    trackName={trackName}
                    setTrack={setTrack}
                    playPause={playPause}
                />
            </li>
        )
    }).slice(0, amountTracks)

    return (
        <ul className={styles.playlistSideBar}>
            <h1 className={styles.title}>{title}</h1>
                {trackList}
            <img className={styles.arrow} src={arrow} alt=''/>
            <hr className='sideBarHr'/>
        </ul>
    )
}
