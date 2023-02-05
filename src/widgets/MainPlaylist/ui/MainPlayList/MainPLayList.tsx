import {NavMenuTrackList} from '@features/NavMenuTrackList';
import {TrackList} from '@features/TrackList';
import styles from './MainPlaylist.module.scss';

export const MainPLayList = () => (
    <div className={styles.playlistWrapper}>
        <NavMenuTrackList/>
        <TrackList/>
    </div>
)