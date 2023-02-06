import {NavMenuTrackList} from '@features/NavMenuTrackList';
import {TrackList} from '@features/TrackList';
import {SearchPanel} from "@features/SearchPanel";
import styles from './MainPlaylist.module.scss';

interface IMainPlaylist {
    target: string
}

export const MainPLayList = ({target}: IMainPlaylist) => {

    return (
        <div className={styles.playlistWrapper}>
            <NavMenuTrackList target={target}/>
            <SearchPanel/>
            <TrackList/>
        </div>
    )
}