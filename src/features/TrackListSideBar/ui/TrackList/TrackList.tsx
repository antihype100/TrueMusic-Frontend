import {Track} from "@entities/Track";
import {setTrackWrapper} from "@entities/Track/helpler/setTrackGlobal";
import {playPauseWrapper} from "@entities/Track/helpler/playPause";
import {ITrackResponse, useGlobalTrackStore} from "@widgets/Player/model/globalTrackStore";
import styles from './TrackList.module.scss';

interface IPlaylistSideBar {
    amountTracks: number;
    title: string;
    trackList?: ITrackResponse[]
}

export const TrackList = ({amountTracks, title, trackList}: IPlaylistSideBar) => {

    const {globalTrackInfo, audioRefGlobal, setTrackInfoGlobal, globalTrackList} = useGlobalTrackStore(state => state);

    const coverWidthHeight = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 50
    const fontSize = (window.screen.width - 480) / (1280 - 480) * (16 - 16) + 10

    return (
        <ul className={styles.playlistSideBar}>
            <h1 className={styles.title}>{title}</h1>
            {trackList ?
                trackList.map(({authorName, trackName, trackPath, id,}) => {
                    const setTrack = setTrackWrapper(id, setTrackInfoGlobal, globalTrackList)
                    const playPause = playPauseWrapper(trackName, globalTrackInfo, authorName, setTrackInfoGlobal, audioRefGlobal)
                    return (
                        <li className={styles.trackListItem} key={id}>
                            <Track
                                fontSize={fontSize}
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
                :
                null
            }
        </ul>
    )
}
