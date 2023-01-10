import { Track } from './track/Track';
import styles from './TrackList.module.scss';
import { Link } from 'react-router-dom';

interface ITrackList {
  amountTracks: number;
}

const TrackList = ({ amountTracks }: ITrackList) => (
  <div className={styles.trackListWrapper}>
    <ul className='trackList'>
      {Array.from(Array(amountTracks).keys()).map((value) => (
        <li>
          <Track index={value + 1} />
        </li>
      ))}
    </ul>
  </div>
);

export { TrackList };
