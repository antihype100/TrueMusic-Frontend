import { Track } from '../../../entities/Track';
import styles from './MainPlaylist.module.scss';
import { ITrackList } from '../model/types';


export const MainPlaylist = ({ amountTracks, tracksList }: ITrackList) => {

    return (
        <div className={styles.trackListWrapper}>
            <ul className={styles.trackList}>
                {tracksList.map((track, i) => (
                <li className={styles.trackListItem} key={i}>
                    <Track
                        index={i + 1}
                        authorName={track.authorName}
                        trackName={track.trackName}
                        duration={track.duration}
                        likes={track.likes}
                        audition={track.audition}
                    />
                </li>
            )).slice(0, amountTracks)}
            </ul>
        </div>
    );
};
