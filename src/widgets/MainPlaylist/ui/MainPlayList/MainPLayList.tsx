import styles from './MainPlaylist.module.scss';
import { NavMenuTrackList } from '../../../../features/NavMenuTrackList';
import { TrackList } from '../../../../features/TrackList';

export const MainPLayList = () => {
    const amountTracks = window.screen.height > 1100 ? 8 : 6;
    return (
        <div className={styles.playlistWrapper}>
            <NavMenuTrackList />
            <TrackList amountTracks={amountTracks} />
        </div>
    )
}