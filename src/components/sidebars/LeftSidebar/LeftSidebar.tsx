import { logo } from '../../../utils/importSvg';
import styles from './LeftSidebar.module.scss';
import { PlaylistSideBar } from '../PlaylistSideBar/PlaylistSideBar';
import NavMenu from '../NavMenu/NavMenu';

const LeftSideBar = () => {
  const amountTracks = window.screen.height > 1100 ? 9 : 7;

  return (
    <aside className={styles.leftSideBar}>
      <img className={styles.logo} src={logo} alt="" />
      <NavMenu />
      <hr className="sideBarHr" />
      <PlaylistSideBar amountTracks={amountTracks} header="Ваш плейлист" />
    </aside>
  );
};

export default LeftSideBar;
