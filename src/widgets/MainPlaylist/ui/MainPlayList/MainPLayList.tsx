import { NavMenuTrackList } from '@features/NavMenuTrackList';
import { TrackList } from '@features/TrackList';
import styles from './MainPlaylist.module.scss';

export const MainPLayList = () => {
    const amountTracks = (window.screen.height / 50) / 3.5
    return (
        <div className={styles.playlistWrapper}>
            <NavMenuTrackList />
            <TrackList amountTracks={amountTracks} />
        </div>
    )
}