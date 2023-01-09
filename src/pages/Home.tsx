import BaseLayoutNoAuth from "../components/layouts/BaseLayoutNoAuth";
import './Home.scss'
import Player from "../components/player/Player";

const Home = () => (
            <BaseLayoutNoAuth>
                <section className='sectionHome'>
                  <main className='mainHome'>
                    <input type="text"/>
                    <Player/>
                  </main>
                </section>
            </BaseLayoutNoAuth>
    )
export default Home;
