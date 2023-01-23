import styles from '../MenuLink/MenuLink.module.scss';
import { Link } from 'react-router-dom';

interface INavMenuLink {
    img: any;
    linkText: string;
    to: string;
}

export const NavMenuLink = ({ img, linkText, to }: INavMenuLink) => (
    <li className={styles.navMenuItem}>
        <Link className={styles.navMenuLink} to={to}>
            <img className={styles.navMenuIcon} src={img} alt="img" />
            <span>{linkText}</span>
        </Link>
    </li>
);