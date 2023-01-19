import ProfileLayout from '../../../components/layouts/profileLayout/ProfileLayout';
import { SearchPanel } from '../../../components/searchPanel/SearchPanel';
import styles from './Profile.module.scss';
import ProfileInfo from '../../../components/profileInfo/ProfileInfo';
import { Selections } from '../../../components/selections/Selections';
import cover1 from '../../../assets/sidebar/playlist/cover1.png';
import cover2 from '../../../assets/sidebar/playlist/cover2.png';
import cover3 from '../../../assets/sidebar/playlist/cover3.png';
import cover4 from '../../../assets/sidebar/playlist/cover4].png';
import cover5 from '../../../assets/sidebar/playlist/cover5.png';
import cover6 from '../../../assets/sidebar/playlist/cover6.png';
import cover7 from '../../../assets/sidebar/playlist/cover7.png';

const selectionList = [
  {
    header: 'Альбомы',
    tracksOrAlbums: 'albums',
    selection: [
      { author: 'Kizaru', albumName: 'Kizaru', cover: cover1 },
      { author: 'Kizaru', albumName: 'Foobar', cover: cover2 },
      { author: 'Kizaru', albumName: 'Toola', cover: cover3 },
      { author: 'Kizaru', albumName: '6Black', cover: cover4 },
      { author: 'Kizaru', albumName: 'Yanix', cover: cover5 },
      { author: 'Kizaru', albumName: 'Kiilo', cover: cover6 },
      { author: 'Kizaru', albumName: 'Kiilo', cover: cover7 }
    ]
  },
  {
    header: 'Самые залайканные альбомы',
    tracksOrAlbums: 'albums',
    selection: [
      { author: 'Kizaru', albumName: 'Kizaru', cover: cover1 },
      { author: 'Yanix', albumName: 'Foobar', cover: cover2 },
      { author: 'Snoop', albumName: 'Toola', cover: cover3 },
      { author: 'Cold', albumName: '6Black', cover: cover4 },
      { author: 'Kizaru', albumName: 'Yanix', cover: cover5 },
      { author: 'Kizaru', albumName: 'Kiilo', cover: cover6 },
      { author: 'Kizaru', albumName: 'Kiilo', cover: cover7 }
    ]
  },
  {
    header: 'Самые прослушиваемые треки',
    tracksOrAlbums: 'tracks',
    selection: [
      { author: 'Kizaru', trackName: 'Kizaru', albumName: 'Mas fuerte', cover: cover1 },
      { author: 'Kizaru', trackName: 'Foobar', albumName: 'Album', cover: cover2 },
      { author: 'Kizaru', trackName: 'Toola', albumName: 'Gooka', cover: cover3 },
      { author: 'Kizaru', trackName: '6Black', albumName: '6Black', cover: cover4 },
      { author: 'Kizaru', trackName: 'Yanix', albumName: 'Yanix', cover: cover5 },
      { author: 'Kizaru', trackName: 'Kiilo', albumName: 'Kiilo', cover: cover6 },
      { author: 'Kizaru', trackName: 'Kiilo', albumName: 'Kiilo', cover: cover7 }
    ]
  }
];

const Profile = () => {

  return (
    <ProfileLayout>
      <section className={styles.albums}>
        <SearchPanel />
        <Selections selectionList={selectionList} />
      </section>
      <ProfileInfo />
    </ProfileLayout>
  );
};

export default Profile;
