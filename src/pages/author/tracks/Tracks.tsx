import { Link, useLocation } from 'react-router-dom';
import { AUTHOR_ABOUT, AUTHOR_ALBUMS, AUTHOR } from '../../../utils/routes';
import { TrackList } from '../../../components/trackList/TrackList';
import styles from './Tracks.module.scss';
import AuthorLayout from '../../../components/layouts/authorLayout/AuthorLayout';

const navList = [
  { id: 'albums', href: AUTHOR_ALBUMS, title: 'Альбомы' },
  { id: 'tracks', href: AUTHOR, title: 'Треки' },
  { id: 'about', href: AUTHOR_ABOUT, title: 'Описание' }
];

const Tracks = () => {
  const { pathname } = useLocation();
  const path = String(pathname.split('/').splice(-1));

  return (
    <AuthorLayout author={'Dora'}>
      <nav className={styles.navBar}>
        {navList.map(({ title, href, id }) => (
          <Link key={id} className={path === id ? styles.navLinkActive : styles.navLink} to={href}>
            {title}
          </Link>
        ))}
      </nav>
      <TrackList amountTracks={5} />
    </AuthorLayout>
  );
};

export default Tracks;
