import { Track } from './track/Track';
import styles from './TrackList.module.scss';

export interface ITrack {
  index?: number;
  author: string;
  trackName: string;
  duration: number;
  likes: number;
  audition: number;
}

interface ITrackList {
  amountTracks: number;
  tracksList: ITrack[];
}

const TrackList = ({ amountTracks, tracksList }: ITrackList) => {
  const elementTrackList = tracksList.map((track, i) => (
    <li key={i}>
      <Track
        index={i + 1}
        author={track.author}
        trackName={track.trackName}
        duration={track.duration}
        likes={track.likes}
        audition={track.audition}
      />
    </li>
  ));

  return (
    <div className={styles.trackListWrapper}>
      <ul className={styles.trackList}>{elementTrackList.slice(0, amountTracks)}</ul>
    </div>
  );
};

export { TrackList };
