import { Link } from 'react-router-dom';
import img from '../../../assets/sidebar/playlist/cover7.png';
import styles from './Track.module.scss';
import { headphones, like } from '../../../utils/importSvg';
import type { ITrack } from '../TrackList';

const Track = ({ index, author, trackName, audition, duration, likes }: ITrack) => {
  return (
    <div className={styles.playerTrack}>
      <p className={styles.numberPosition}>{index}</p>
      <img className={styles.img} src={img} alt='' />
      <div className={styles.contentAndInputWrapper}>
        <div className={styles.rightLeftContentWrapper}>
          <div className={styles.leftContentWrapper}>
            <Link className={styles.authorName} to={`/author/${author.toLowerCase()}/profile`}>
              {author}
            </Link>
            <Link
              to={`/author/${author.toLowerCase()}/tracks/${trackName.toLowerCase()}`}
              className={styles.trackName}
            >
              {trackName}
            </Link>
            <span className={styles.presentTime}>00:00</span>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.statisticWrapper}>
              <div className={styles.likeWrapper}>
                <span className={styles.likeAmount}>{likes}</span>
                <img src={like} alt='' />
              </div>
              <div className={styles.auditionsWrapper}>
                <span className={styles.auditionsAmount}>{audition}</span>
                <img src={headphones} alt='' />
              </div>
            </div>
            <span className={styles.playerTrackDuration}>
              {Math.floor(duration / 60)}:{duration % 60}
            </span>
          </div>
        </div>

        <input
          className={`${styles.inputDurationTrack} ${styles.sliderProgress}`}
          defaultValue='0'
          type='range'
        />
      </div>
    </div>
  );
};

export { Track };
