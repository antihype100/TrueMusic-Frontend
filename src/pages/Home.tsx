import { TrackList } from '../components/trackList/TrackList';
import styles from './Home.module.scss'
import { SearchPanel } from '../components/searchPanel/SearchPanel';
import Player from '../components/player/Player';
import BaseLayout from '../components/layouts/BaseLayout';

const Home = () => (
<BaseLayout>
<section className={styles.sectionLayout}>
        <main className={styles.mainLayout}>
          <SearchPanel/>
          <TrackList amountTracks={10}/>
          <Player/>
        </main>
      </section>
</BaseLayout>
);
export default Home;
