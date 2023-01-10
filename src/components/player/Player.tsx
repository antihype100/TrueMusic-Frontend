import styles from './Player.module.scss';
import img from '../../assets/png/forPlayer.png';
import { repeat, like, next, prev, play } from '../../utils/importSvg';

const Player = () => (
  <div className={styles.player}>
    <div className={styles.contentWrapper}>
      <div className={styles.leftContent}>
        <img className='' src={img} alt='' />

        <div className={styles.infoWrapper}>
          <span className={styles.authorName}>Kizaru</span>
          <span className={styles.trackName}>Messege</span>
          <span className={styles.presentTime}>00:40</span>
        </div>

        <div className={styles.iconsWrapper}>
          <img className={styles.repeatIcon} src={repeat} alt='' />
          <img className={styles.likeIcon} src={like} alt='' />
        </div>
      </div>

      <div className={styles.playStopWrapper}>
        <img src={prev} alt='' />
        <img src={play} alt='' />
        <img src={next} alt='' />
      </div>

      <span className={styles.playerDuration}>02:32</span>
    </div>

    <input className={`${styles.inputDuration} ${styles.sliderProgress}`} type='range' />
  </div>
);

export default Player;
