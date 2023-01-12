import styles from './TrackPage.module.scss';
import { arrow } from '../../../utils/importSvg';
import img from '../../../assets/album.png';
import PageCover from '../../../components/pageCover/PageCover';

const TrackPage = () => {
  return (
    <PageCover
      img={img}
      author={'Kizaru'}
      likes={'241'}
      listening={'124001'}
      name={'Relax'}
      release={'16 декабря 2016'}
    >
      <div className={styles.textBody}>
        <div className={styles.text}>
          {Array.from(Array(5).keys()).map((_, i) => (
            <p key={i}>
              Я посылаю людям message (hold on) Если берусь за дело — настоящий savage Не нужен
              challenge, наношу огромный damage (большой урон) Ты микроб, ты распыляешься на мелочь
              (пиу!)
            </p>
          ))}
        </div>
        <button type='button' className={styles.arrow}>
          <img src={arrow} alt='arrow' />
        </button>
      </div>
    </PageCover>
  );
};

export default TrackPage;
