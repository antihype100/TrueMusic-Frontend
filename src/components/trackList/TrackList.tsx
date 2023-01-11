import { Track } from './track/Track';
import styles from './TrackList.module.scss';

interface ITrackList {
  amountTracks: number;
}

const TrackList = ({ amountTracks }: ITrackList) => (
  <div className={styles.trackListWrapper}>
    <ul className='trackList'>
      {Array.from(Array(amountTracks).keys()).map((value, i) => (
        <li key={i}>
          <Track index={value + 1} />
        </li>
      ))}
    </ul>
  </div>
);

export { TrackList };
