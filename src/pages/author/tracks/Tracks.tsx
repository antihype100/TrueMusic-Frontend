import { AUTHOR_ABOUT, AUTHOR_ALBUMS, AUTHOR } from '../../../utils/routes';
import { Link, useLocation } from 'react-router-dom';
import { TrackList } from '../../../components/trackList/TrackList';
import styles from './Tracks.module.scss';

interface ITracks {
  author: string;
}

const links = [
  { id: 'tracks', href: AUTHOR, title: 'Треки' },
  { id: 'albums', href: AUTHOR_ALBUMS, title: 'Альбомы' },
  { id: 'about', href: AUTHOR_ABOUT, title: 'Описание' }
];

const Tracks = ({ author }: ITracks) => {
  const { pathname } = useLocation();
  const path = String(pathname.split('/').splice(-1));

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{author}</h1>
      <div className={styles.links}>
        x
        {links.map(({ title, href, id }) => (
          <Link key={id} className={path === id ? styles.active : ''} to={href}>
            {title}
          </Link>
        ))}
      </div>
      <TrackList amountTracks={5} />
    </section>
  );
};

export default Tracks;
