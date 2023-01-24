import cover1 from '../../../../assets/sidebar/playlist/cover1.png';
import cover2 from '../../../../assets/sidebar/playlist/cover2.png';
import cover3 from '../../../../assets/sidebar/playlist/cover3.png';
import cover4 from '../../../../assets/sidebar/playlist/cover4].png';
import cover5 from '../../../../assets/sidebar/playlist/cover5.png';
import cover6 from '../../../../assets/sidebar/playlist/cover6.png';
import cover7 from '../../../../assets/sidebar/playlist/cover7.png';

import styles from './TrackList.module.scss';
import { arrow } from '../../../../shared/helper/importSvg';
import { Track } from '../Track/Track';

const trackListSideBar = [
    { author: 'Kizaru', trackName: 'Никто не нужен', img: cover1 },
    { author: 'Yanix', trackName: 'Хайпим', img: cover2 },
    { author: 'Snoop Dog', trackName: 'Smoke Weed', img: cover3 },
    { author: 'Хаски', trackName: 'Панелька', img: cover4 },
    { author: 'Дора', trackName: 'Дура', img: cover5 },
    { author: 'SQWOZ BAB', trackName: 'Султан', img: cover6 },
    { author: 'Дора', trackName: 'Дура', img: cover7 },
    { author: 'Kizaru', trackName: 'Никто не нужен', img: cover1 },
    { author: 'Yanix', trackName: 'Хайпим', img: cover2 },
    { author: 'Snoop Dog', trackName: 'Smoke Weed', img: cover3 },
    { author: 'Хаски', trackName: 'Панелька', img: cover4 },
    { author: 'Kizaru', trackName: 'Никто не нужен', img: cover1 },
    { author: 'Yanix', trackName: 'Хайпим', img: cover2 },
    { author: 'Snoop Dog', trackName: 'Smoke Weed', img: cover3 },
    { author: 'Хаски', trackName: 'Панелька', img: cover4 },
];

interface IPlaylistSideBar {
    amountTracks: number;
    header: string;
}

export const TrackList = ({ amountTracks, header }: IPlaylistSideBar) => (
    <ul className={styles.playlist}>
        <h1 className={styles.header}>{header}</h1>
        {trackListSideBar
            .map((track, i) => <Track key={i} img={track.img} author={track.author} trackName={track.trackName} />)
            .slice(0, amountTracks)}
        <img className={styles.arrow} src={arrow} alt='' />
        <hr className='sideBarHr' />
    </ul>
);
