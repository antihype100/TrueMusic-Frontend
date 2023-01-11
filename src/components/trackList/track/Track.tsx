import { Link } from 'react-router-dom';
import img from '../../../assets/png/forPlayer.png';
import styles from './Track.module.scss';
import { headphones, like } from '../../../utils/importSvg';

interface ITrack {
  index: number;
}

const Track = ({ index }: ITrack) => {
  return (
    <div className={styles.playerTrack}>
      <p className={styles.numberPosition}>{index}</p>
      <img className={styles.img} src={img} alt='' />
      <div className={styles.contentAndInputWrapper}>
        <div className={styles.rightLeftContentWrapper}>
          <div className={styles.leftContentWrapper}>
            <Link className={styles.authorName} to={`/author/${'dora'}/tracks`}>
              Kizaru
            </Link>
            <Link to='#' className={styles.trackName}>
              Messege
            </Link>
            <span className={styles.presentTime}>00:40</span>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.statisticWrapper}>
              <div className={styles.likeWrapper}>
                <span className={styles.likeAmount}>323432</span>
                <img src={like} alt='' />
              </div>
              <div className={styles.auditionsWrapper}>
                <span className={styles.auditionsAmount}>33233432</span>
                <img src={headphones} alt='' />
              </div>
            </div>
            <span className={styles.playerTrackDuration}>02:34</span>
          </div>
        </div>

        <input
          className={`${styles.inputDurationTrack} ${styles.sliderProgress}`}
          value='0'
          type='range'
        />
      </div>
    </div>
  );
};

export { Track };
