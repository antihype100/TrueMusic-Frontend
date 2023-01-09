import BaseLayout from "../components/layouts/BaseLayout";
import './Home.scss'
import Player from "../components/player/Player";
import {SearchPanel} from "../components/searchPanel/SearchPanel";
import { TrackList } from "../components/trackList/TrackList";

const Home = () => (
            <BaseLayout>
                <section className='sectionHome'>

                  <main className='mainHome'>
                    <SearchPanel/>
                    <TrackList amountTracks={12}/>
                    <Player/>
                  </main>
                </section>

            </BaseLayout>
    )
export default Home;
