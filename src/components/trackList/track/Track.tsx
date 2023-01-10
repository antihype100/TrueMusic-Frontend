import { Link } from 'react-router-dom';
import img from '../../../assets/png/forPlayer.png';
import styles from './Track.module.scss';

interface ITrack {
  index: number;
}

const Track = ({ index }: ITrack) => {
  return (
    <div className={styles.playerTrack}>
      <p className={styles.numberPosition}>{index}</p>
      <img className={styles.img} src={img} alt='' />
      <div className={styles.infoWrapper}>
        <Link to={`/author/${'dora'}/tracks`}>
          <span className={styles.authorName}>Kizaru</span>
        </Link>
        <span className={styles.trackName}>Messege</span>
        <span className={styles.presentTime}>00:40</span>
        <input className={`${styles.inputDurationTrack} ${styles.sliderProgress}`} type='range' />
      </div>
    </div>
  );
};

export { Track };
