import { Link } from "react-router-dom";
import { AUTHOR_ABOUT, AUTHOR_ALBUMS, AUTHOR } from "../../../utils/routes";
import { TrackList } from "../../../components/trackList/TrackList";
import styles from "./Tracks.module.scss";
import AuthorLayout from "../../../components/layouts/authorLayout/AuthorLayout";
import BaseLayout from "../../../components/layouts/baseLayout/BaseLayout";



const navList = [
  { id: "tracks", href: AUTHOR, title: "Треки" },
  { id: "albums", href: AUTHOR_ALBUMS, title: "Альбомы" },
  { id: "about", href: AUTHOR_ABOUT, title: "Описание" }
];

const Tracks = () => {

  return (
    <BaseLayout>
      <AuthorLayout author={"Dora"}>
          <nav className={styles.navBar}>
            <Link className={styles.navLink} to="#">{navList[0].title}</Link>
            <Link className={styles.navLinkActive} to="#">{navList[1].title}</Link>
            <Link className={styles.navLink} to="#">{navList[2].title}</Link>
          </nav>
        <TrackList amountTracks={5} />
      </AuthorLayout>
    </BaseLayout>
  );
};

export default Tracks;
