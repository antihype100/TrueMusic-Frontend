import {Link} from 'react-router-dom';
import {favoritesList, homeList} from "@features/NavMenuTrackList/model/navLists";
import {useState} from "react";
import {useGlobalPlaylistStore} from "@widgets/MainPlaylist/model/useGlobalPlaylistStore";
import styles from './NavMenuTrackList.module.scss'

interface INavMenuTrackList {
    target: string
}

export const NavMenuTrackList = ({target}: INavMenuTrackList) => {

    const navListConst = target === 'FAVORITES' ? favoritesList : homeList
    const [navList, setNavList] = useState(navListConst)
    const [activeIndex, setActiveIndex] = useState(0)
    const { setNavLinkState, navLinkState } = useGlobalPlaylistStore(state => state)

    const toggleActive = (index: number) => {
        const newNavList = navList.map(el => {
            // eslint-disable-next-line no-param-reassign
            el.active = false
            return el
        })
        navList[index].active = true
        setActiveIndex(index)
        setNavList(newNavList)
        setNavLinkState(newNavList[index])
    }
    return (
        <nav className={styles.navBar}>
            {navList.map((link, index) => (
                <Link
                    key={index}
                    className={link.active ? `${styles.navLinkActive} ${styles.navLink}` : styles.navLink}
                    to="#"
                    onClick={() => toggleActive(index)}
                >
                    {link.title}
                </Link>
            ))}
        </nav>
    )
}