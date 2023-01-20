import { Link, useParams } from 'react-router-dom';
import { TrackList } from '../../../components/trackList/TrackList';
import styles from './AuthorMainPage.module.scss';
import AuthorLayout from '../../../components/layouts/authorLayout/AuthorLayout';
import BaseLayout from '../../../components/layouts/baseLayout/BaseLayout';

const navList = [
  { id: 'main', href: '/', title: 'Треки' },
  { id: 'albums', href: '/', title: 'Альбомы' },
  { id: 'about', href: '/', title: 'Описание' },
];

const tracksList = [
  { author: 'Kizaru', trackName: 'Messege', duration: 534, likes: 234234, audition: 846532 },
  { author: '6BLACK', trackName: 'Ex Calling', duration: 234, likes: 3244, audition: 9805 },
  { author: 'Instasamka', trackName: 'Pop star', duration: 349, likes: 243674, audition: 35325 },
  { author: 'Cold carti', trackName: 'ILY', duration: 434, likes: 234234, audition: 324679 },
  { author: 'DJ Snake', trackName: 'Middle', duration: 134, likes: 34324, audition: 65332 },
  { author: 'Kizaru', trackName: 'Мне это не нужно', duration: 224, likes: 8709, audition: 2167976 },
];

const AuthorMainPage = () => {
  const { name } = useParams();

  return (
    <BaseLayout>
      <AuthorLayout author={name}>
        <div className={styles.authorMainPageWrapper}>
          <nav className={styles.navBar}>
            <Link className={styles.navLink} to="#">
              {navList[0].title}
            </Link>
            <Link className={styles.navLinkActive} to="#">
              {navList[1].title}
            </Link>
            <Link className={styles.navLink} to="#">
              {navList[2].title}
            </Link>
          </nav>
          <TrackList amountTracks={5} tracksList={tracksList} />
        </div>
      </AuthorLayout>
    </BaseLayout>
  );
};

export default AuthorMainPage;
