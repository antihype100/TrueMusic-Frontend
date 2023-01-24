import styles from './Menu.module.scss';
import { useUserInfoStore } from '../../../../entities/User/model/UserInfoStore';
import { getUserNavMenuList, getAuthorNavMenuList, getNoAuthNavMenuList } from '../../model/navMenuData';
import { NavMenuLink } from '../MenuLink/MenuLink';


export const Menu = () => {
    const { userName, role, auth } = useUserInfoStore(state => state);
    const userNavMenuList = getUserNavMenuList(userName);
    const authorNavMenuList = getAuthorNavMenuList(userName);
    const noAuthNavMenuList = getNoAuthNavMenuList();
    console.log(userName, role, auth);

    let navMenuList = auth && role === 'AUTHOR'
        ? authorNavMenuList
        : auth && role === 'USER'
            ? userNavMenuList
            : noAuthNavMenuList;

    return (
        <nav className={styles.navMenu}>
            <ul className={styles.navMenuList}>
                {navMenuList.map((navLink) => (
                    <NavMenuLink to={navLink.to} img={navLink.img} linkText={navLink.linkText} />
                ))}
            </ul>
        </nav>
    );
};