import trackLogo from '../../../assets/playlists/3.png';
import styles from './PlaylistSideBar.module.scss';
import { arrow } from '../../../utils/importSvg';
import PlaylistTrack from './PlaylistTrack';

interface IPlaylistSideBar {
  amountTracks: number;
  header: string;
}

const PlaylistSideBar = ({ amountTracks, header }: IPlaylistSideBar) => (
  <ul className={styles.playlist}>
    <h1 className={styles.header}>{header}</h1>
    {Array.from(Array(amountTracks).keys()).map(() => (
      <PlaylistTrack img={trackLogo} authorName='Kizaru' trackName='Message' />
    ))}
    <img className={styles.arrow} src={arrow} alt='' />
    <hr className='sideBarHr' />
  </ul>
);

export { PlaylistSideBar };
