import ProfileLayout from "../../../components/layouts/profileLayout/ProfileLayout";
import { SearchPanel } from "../../../components/searchPanel/SearchPanel";
import AlbumList from "../../../components/albumList/AlbumList";
import styles from './Profile.module.scss'
import ProfileInfo from "../../../components/profileInfo/ProfileInfo";

const Profile = () => {
  return (
    <ProfileLayout>
      <section className={styles.albums}>
        <SearchPanel/>
        <div className={styles.albumList}>
          <AlbumList category={'Альбомы:'}/>
          <AlbumList category={'Самые залайканные альбомы:'}/>
          <AlbumList category={'Самые прослушиваемые треки:'}/>
        </div>
      </section>
      <ProfileInfo/>
    </ProfileLayout>
  )
};

export default Profile;
