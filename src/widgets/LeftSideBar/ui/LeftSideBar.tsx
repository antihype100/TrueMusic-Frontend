import { logo } from '../../../shared/helper/importSvg';
import styles from './LeftSideBar.module.scss';
import { TrackList } from '../../../features/TrackListSideBar/ui/TrackList/TrackList';
import { NavMenu } from '../../../features/NavMenu';

export const LeftSideBar = () => {
    const amountTracks = window.screen.height > 1100 ? 9 : 7;

    return (
        <aside className={styles.leftSideBar}>
            <img className={styles.logo} src={logo} alt='' />
            <NavMenu />
            <hr className='sideBarHr' />
            <TrackList amountTracks={amountTracks} header='Ваш плейлист' />
        </aside>
    );
};
