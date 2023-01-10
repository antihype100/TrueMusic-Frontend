import { useLocation } from 'react-router-dom';
import { TrackList } from '../../../components/trackList/TrackList';
import { AUTHOR_ABOUT, AUTHOR_ALBUMS, AUTHOR_TRACKS } from '../../../utils/routes';
import styles from './Tracks.module.scss';

interface ITracks {
  author: string;
}

const links = [
  { id: 'tracks', href: AUTHOR_TRACKS, title: 'Треки' },
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
        {links.map(({ title, href, id }) => (
          <a key={id} className={path === id ? styles.active : ''} href={href}>
            {title}
          </a>
        ))}
      </div>
      <TrackList amountTracks={5} />
    </section>
  );
};

export default Tracks;
