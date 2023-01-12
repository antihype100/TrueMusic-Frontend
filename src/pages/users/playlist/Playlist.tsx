import PageCover from '../../../components/pageCover/PageCover';
import img from '../../../assets/album.png';
import { TrackList } from '../../../components/trackList/TrackList';

const Playlist = () => {
  return (
    <PageCover
      img={img}
      author={'User'}
      likes={'241'}
      listening={'124001'}
      name={'Relax'}
      release={'16 декабря 2016'}
    >
      <TrackList amountTracks={5} />
    </PageCover>
  );
};

export default Playlist;
