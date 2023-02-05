import { useUserInfoStore } from '@entities/User';
import styles from './Menu.module.scss';
import { getUserNavMenuList, getAuthorNavMenuList, getNoAuthNavMenuList } from '../../model/navMenuData';
import { NavMenuLink } from '../MenuLink/MenuLink';


export const Menu = () => {
    const { userName, role, auth } = useUserInfoStore(state => state);
    const userNavMenuList = getUserNavMenuList(userName);
    const authorNavMenuList = getAuthorNavMenuList(userName);
    const noAuthNavMenuList = getNoAuthNavMenuList();

    const navMenuList = auth && role === 'AUTHOR'
        ? authorNavMenuList
        : auth && role === 'USER'
            ? userNavMenuList
            : noAuthNavMenuList;

    return (
        <nav className={styles.navMenu}>
            <ul className={styles.navMenuList}>
                {navMenuList.map((navLink, index) => (
                    <NavMenuLink key={index} to={navLink.to} img={navLink.img} linkText={navLink.linkText} />
                ))}
            </ul>
        </nav>
    );
};
