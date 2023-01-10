import { logo } from '../../../utils/importSvg';
import styles from './LeftSidebar.module.scss';
import { PlaylistSideBar } from '../PlaylistSideBar/PlaylistSideBar';
import NavMenu from '../NavMenu/NavMenu';

const LeftSideBar = () => (
  <aside className={styles.leftSideBar}>
    <img className={styles.logo} src={logo} alt='' />
    <NavMenu />
    <hr className='sideBarHr' />
    <PlaylistSideBar amountTracks={11} header='Уходящая неделя' />
  </aside>
);

export default LeftSideBar;
