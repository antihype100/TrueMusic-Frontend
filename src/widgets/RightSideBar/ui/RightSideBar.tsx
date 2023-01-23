import { Playlist } from '../../../features/PlaylistSideBar/ui/Playlist/Playlist';
import styles from './RightSideBar.module.scss';

export const RightSideBar = () => {
  const amountTracks = window.screen.height > 1100 ? 7 : 6;

  return (
    <aside className={styles.rightSideBar}>
      <Playlist amountTracks={amountTracks} header="Уходящая неделя" />
      <Playlist amountTracks={amountTracks} header="Уходящий месяц" />
    </aside>
  );
};


