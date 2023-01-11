import { TrackList } from '../../../components/trackList/TrackList';
import AuthorLayout from '../../../components/layouts/authorLayout/AuthorLayout';
import img from '../../../assets/album.png';
import { headphones } from '../../../utils/importSvg';
import styles from './AlbumPage.module.scss';
import Comments from '../../../components/comments/Comments';
import LikeIcon from '../../../components/icon/LikeIcon';

const AlbumPage = () => {
  return (
    <AuthorLayout author={'Dora'}>
      <div className={styles.wrapper}>
        <h2 className={styles.nameAlbum}>Mas Fuerte</h2>
        <div className={styles.body}>
          <img src={img} className={styles.imgAlbum} alt='album' />
          <div className={styles.stats}>
            <span className={styles.date}>16 декабря 2016</span>
            <div>
              <span>10</span>
              <LikeIcon />
            </div>
            <div>
              <span>129</span>
              <img src={headphones} alt='headphones' />
            </div>
          </div>
        </div>
        <TrackList amountTracks={5} />
        <Comments />
      </div>
    </AuthorLayout>
  );
};

export default AlbumPage;
