import { Link } from 'react-router-dom';
import { TrackList } from '../../widgets/MainPlaylist/TrackList';
import styles from './Home.module.scss';
import { SignInUpButtons } from '../../features/AuthButton/SignInUpButtons';
import BaseLayout from '../../app/layouts/baseLayout/BaseLayout';
import { useUserInfoStore } from '../../entities/User/model/UserInfoStore';
import { ProfileBlock } from '../../entities/ProfileBlock/ProfileBlock';
import { PlaylistNavMenu } from '../../features/PlaylistNavMenu';



const tracksList = [
  { author: 'Kizaru', trackName: 'Messege', duration: 534, likes: 234234, audition: 846532 },
  { author: '6BLACK', trackName: 'Ex Calling', duration: 234, likes: 3244, audition: 9805 },
  { author: 'Instasamka', trackName: 'Pop star', duration: 349, likes: 243674, audition: 35325 },
  { author: 'Cold carti', trackName: 'ILY', duration: 434, likes: 234234, audition: 324679 },
  { author: 'DJ Snake', trackName: 'Middle', duration: 134, likes: 34324, audition: 65332 },
  { author: 'Kizaru', trackName: 'Мне это не нужно', duration: 224, likes: 8709, audition: 2167976 },
];

const Home = () => {
  const amountTracks = window.screen.height > 1100 ? 8 : 6;
  const { auth } = useUserInfoStore((state) => state);
  return (
    <BaseLayout>
      <div className={styles.homeContentWrapper}>
        <PlaylistNavMenu/>

        <TrackList amountTracks={amountTracks} tracksList={tracksList} />
      </div>
      {auth ? <ProfileBlock /> : <SignInUpButtons />}
    </BaseLayout>
  );
};
export default Home;
