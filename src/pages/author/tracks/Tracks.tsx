import { AUTHOR_ABOUT, AUTHOR_ALBUMS, AUTHOR } from '../../../utils/routes';
import { Link, useLocation } from 'react-router-dom';
import { TrackList } from '../../../components/trackList/TrackList';
import styles from './Tracks.module.scss';
import AuthorLayout from '../../../components/layouts/authorLayout/AuthorLayout';

interface ITracks {
  // author: string;
}

const links = [
  { id: 'tracks', href: AUTHOR, title: 'Треки' },
  { id: 'albums', href: AUTHOR_ALBUMS, title: 'Альбомы' },
  { id: 'about', href: AUTHOR_ABOUT, title: 'Описание' }
];

const Tracks = () => {
  const { pathname } = useLocation();
  const path = String(pathname.split('/').splice(-1));

  return (
    <AuthorLayout author={'Dora'}>
      <div className={styles.links}>
        {links.map(({ title, href, id }) => (
          <Link key={id} className={path === id ? styles.active : ''} to={href}>
            {title}
          </Link>
        ))}
      </div>
      <TrackList amountTracks={5} />
    </AuthorLayout>
  );
};

export default Tracks;
