import { PlaylistSideBar } from '../PlaylistSideBar/PlaylistSideBar';
import styles from './RightSideBar.module.scss';

const RightSideBar = () => {
  const amountTracks = window.screen.height > 1100 ? 7 : 6;

  return (
    <aside className={styles.rightSideBar}>
      <PlaylistSideBar amountTracks={amountTracks} header="Уходящая неделя" />
      <PlaylistSideBar amountTracks={amountTracks} header="Уходящий месяц" />
    </aside>
  );
};

export default RightSideBar;
