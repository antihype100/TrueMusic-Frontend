import { Link } from 'react-router-dom';
import { TrackList } from '../../components/trackList/TrackList';
import styles from './Home.module.scss';
import { SignInUpButtons } from '../../components/signInUpButtons/SignInUpButtons';

const navList = [
  { id: 1, title: 'Подборка TrueMusic', path: '№' },
  { id: 2, title: 'ТОП-чарт', path: '#' },
  { id: 3, title: 'Последнее послушанное', path: '#' }
];

const Home = () => {
  return (
    <>
      <div className={styles.homeContentWrapper}>
        <nav className={styles.navBar}>
          <Link className={styles.navLink} to='#'>
            {navList[0].title}
          </Link>
          <Link className={styles.navLinkActive} to='#'>
            {navList[1].title}
          </Link>
          <Link className={styles.navLink} to='#'>
            {navList[2].title}
          </Link>
        </nav>
        <TrackList amountTracks={8} />
      </div>
      <SignInUpButtons />
    </>
  );
};
export default Home;
