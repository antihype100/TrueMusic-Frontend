import trackLogo from '../../../assets/playlists/3.png';
import './PlaylistSideBar.scss';
import { arrow } from '../../../utils/importSvg';

interface IPlaylistSideBar {
  amountTracks: number;
  header: string;
}

const PlaylistSideBar = ({ amountTracks, header }: IPlaylistSideBar) => (
  <ul className='playlist'>
    <h1 className='playlist__header'>{header}</h1>
    {Array.from(Array(amountTracks).keys()).map(() => (
      <Track img={trackLogo} authorName='Kizaru' trackName='Messege' />
    ))}
    <img className='playlist__arrow' src={arrow} alt='' />
    <hr className='sideBarHr' />
  </ul>
);

interface ITrack {
  img: any;
  authorName: string;
  trackName: string;
}

const Track = ({ img, trackName, authorName }: ITrack) => (
  <li className='playlist__item'>
    <img src={img} alt='' />
    <div className='playlist__name-wrapper'>
      <span className='playlist__authorName'>{authorName}</span>
      <span className='playlist__trackName'>{trackName}</span>
    </div>
  </li>
);

export { PlaylistSideBar };
