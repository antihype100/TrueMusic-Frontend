import { Track } from '../../../entities/Track';
import styles from './TrackList.module.scss';
import { ITrackListProps } from '../model/types';


export const TrackList = ({ amountTracks, tracksList }: ITrackListProps) => {

    return (
        <div className={styles.trackListWrapper}>
            <ul className={styles.trackList}>
                {tracksList.map((track, index) => {
                    return (
                        <li className={styles.trackListItem} key={index}>
                            <Track
                                trackPosition={index + 1}
                                authorName={track.authorName}
                                trackName={track.trackName}
                                trackPath={track.trackPath}
                            />
                        </li>
                    );
                }).slice(0, amountTracks)}
            </ul>
        </div>
    );
};
