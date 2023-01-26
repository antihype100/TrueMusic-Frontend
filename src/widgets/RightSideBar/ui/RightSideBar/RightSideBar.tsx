import { TrackList } from '../../../../features/TrackListSideBar/ui/TrackList/TrackList';
import styles from './RightSideBar.module.scss';

export const RightSideBar = () => {
    const amountTracks = window.screen.height > 1100 ? 7 : 6;

    return (
        <aside className={styles.rightSideBar}>
            <TrackList amountTracks={amountTracks} header='Уходящая неделя' />
            <TrackList amountTracks={amountTracks} header='Уходящий месяц' />
        </aside>
    );
};


