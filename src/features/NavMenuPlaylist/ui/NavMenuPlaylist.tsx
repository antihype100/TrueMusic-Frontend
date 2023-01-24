import styles from './NavMenuPlaylist.module.scss'
import { Link } from 'react-router-dom';

const navList = [
    { id: 1, title: 'Подборка TrueMusic', path: '№' },
    { id: 2, title: 'ТОП-чарт', path: '#', active: true },
    { id: 3, title: 'Последнее послушанное', path: '#' },
];

export const NavMenuPlaylist = () => {
    return (
        <nav className={styles.navBar}>
            {navList.map((el) => (
                <Link className={el.active ? styles.navLinkActive : styles.navLink} to="#">
                    {el.title}
                </Link>
            ))}
        </nav>
    );
};