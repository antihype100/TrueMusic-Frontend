import { PlaylistSideBar } from '../PlaylistSideBar/PlaylistSideBar';
import styles from './RightSideBar.module.scss';

const RightSideBar = () => (
  <aside className={styles.rightSideBar}>
    <PlaylistSideBar amountTracks={8} header='Уходящая неделя' />
    <PlaylistSideBar amountTracks={8} header='Уходящий месяц' />
  </aside>
);

export default RightSideBar;
