import {Link} from 'react-router-dom';
import styles from './NavMenuTrackList.module.scss'

const navList = [
    {id: 1, title: 'Подборка TrueMusic', path: '№'},
    {id: 2, title: 'True-Top', path: '#', active: true},
    {id: 3, title: 'Последнее послушанное', path: '#'},
];

export const NavMenuTrackList = () => (
    <nav className={styles.navBar}>
        {navList.map((link, index) => (
            <Link key={index} className={link.active ? styles.navLinkActive : styles.navLink} to="#">
                {link.title}
            </Link>
        ))}
    </nav>
);