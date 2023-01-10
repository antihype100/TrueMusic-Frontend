import BaseLayout from '../components/layouts/BaseLayout';
import styles from './Home.module.scss';
import Player from '../components/player/Player';
import { SearchPanel } from '../components/searchPanel/SearchPanel';
import { TrackList } from '../components/trackList/TrackList';

const Home = () => (
  <BaseLayout>
    <section className={styles.sectionHome}>
      <main className={styles.mainHome}>
        <SearchPanel />
        <TrackList amountTracks={12} />
        <Player />
      </main>
    </section>
  </BaseLayout>
);
export default Home;
