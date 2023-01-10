import { PlaylistSideBar } from '../PlaylistSideBar/PlaylistSideBar';
import './RightSideBar.scss';

const RightSideBar = () => {
  return (
    <aside className='rightSideBar'>
      <PlaylistSideBar amountTracks={8} header='Уходящая неделя' />
      <PlaylistSideBar amountTracks={8} header='Уходящий месяц' />
    </aside>
  );
};

export default RightSideBar;
