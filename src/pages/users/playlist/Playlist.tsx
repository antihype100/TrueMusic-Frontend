import PageCover from '../../../components/pageCover/PageCover';
import img from '../../../assets/album.png';
import { TrackList } from '../../../components/trackList/TrackList';


const tracksList = [
  { author: "Kizaru", trackName: "Messege", duration: 534, likes: 234234, audition: 846532},
  { author: "6BLACK", trackName: "Ex Calling", duration: 234, likes: 3244, audition: 9805 },
  { author: "Instasamka", trackName: "Pop star", duration: 349, likes: 243674, audition: 35325 },
  { author: "Cold carti", trackName: "ILY", duration: 434, likes: 234234, audition: 324679 },
  { author: "DJ Snake", trackName: "Middle", duration: 134, likes: 34324, audition: 65332 },
  { author: "Kizaru", trackName: "Мне это не нужно", duration: 224, likes: 8709, audition: 2167976 }
];

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
      <TrackList amountTracks={5} tracksList={tracksList}/>
    </PageCover>
  );
};

export default Playlist;
