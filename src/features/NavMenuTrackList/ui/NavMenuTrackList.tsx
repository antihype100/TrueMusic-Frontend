import {Link} from 'react-router-dom';
import {favoritesList, homeList} from "@features/NavMenuTrackList/model/navLists";
import {useState} from "react";
import styles from './NavMenuTrackList.module.scss'

interface INavMenuTrackList {
    target: string
}

export const NavMenuTrackList = ({target}: INavMenuTrackList) => {

    const navListConst = target === 'FAVORITES' ? favoritesList : homeList
    const [navList, setNavList] = useState(navListConst)
    return (
        <nav className={styles.navBar}>
            {navList.map((link, index) => (
                <Link
                    key={index}
                    className={link.active ? `${styles.navLinkActive} ${styles.navLink}` : styles.navLink}
                    to="#"
                >
                    {link.title}
                </Link>
            ))}
        </nav>
    )
}