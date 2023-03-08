import {Link} from 'react-router-dom';
import {favoritesList, homeList} from "@features/NavMenuTrackList/model/navLists";
import {useEffect, useState} from "react";
import {useNavMenuTrackListStore} from "@features/NavMenuTrackList/model/useNavMenuTrackListStore";
import styles from './NavMenuTrackList.module.scss'

interface INavMenuTrackList {
    target: string
}


export const NavMenuTrackList = ({target}: INavMenuTrackList) => {


    const navListConst = target === 'FAVORITES' ? favoritesList : homeList
    const [navList, setNavList] = useState(navListConst)
    const {setNavLinkState} = useNavMenuTrackListStore(state => state)

    useEffect(() => {
        navList.forEach((navState) => {
            if (navState.active) {
                setNavLinkState(navState)
            }
        })
    }, [])

    const toggleActive = (index: number) => {
        const newNavList = navList.map(el => {
            // eslint-disable-next-line no-param-reassign
            el.active = false
            return el
        })
        navList[index].active = true
        setNavLinkState(navList[index])
        setNavList(newNavList)
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