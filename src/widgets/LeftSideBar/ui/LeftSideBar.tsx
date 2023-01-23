import { logo } from '../../../shared/helper/importSvg';
import styles from './LeftSideBar.module.scss';
import { Playlist } from '../../../features/PlaylistSideBar/ui/Playlist/Playlist';
import { NavMenu } from '../../../features/NavMenu';

export const LeftSideBar = () => {
    const amountTracks = window.screen.height > 1100 ? 9 : 7;

    return (
        <aside className={styles.leftSideBar}>
            <img className={styles.logo} src={logo} alt='' />
            <NavMenu />
            <hr className='sideBarHr' />
            <Playlist amountTracks={amountTracks} header='Ваш плейлист' />
        </aside>
    );
};
