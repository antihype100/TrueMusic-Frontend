import { Track } from '../../../entities/Track';
import styles from './MainPlaylist.module.scss';
import { IMainPlaylistProps } from '../model/types';
import { baseUrl } from '../../../shared/helper/baseUrl';


export const MainPlaylist = ({ amountTracks, tracksList }: IMainPlaylistProps) => {

    return (
        <div className={styles.trackListWrapper}>
            <ul className={styles.trackList}>
                {tracksList.map((track, index) => (
                <li className={styles.trackListItem} key={index}>
                    <Track
                        trackPosition={index + 1}
                        authorName={track.authorName}
                        trackName={track.trackName}
                        trackPath={`${baseUrl}/track/${track.trackPath}`}
                    />
                </li>
            )).slice(0, amountTracks)}
            </ul>
        </div>
    );
};
