import { main, profile, sound } from '../../../utils/importSvg';
import nft from '../../../assets/nft.png';
import styles from './NavMenu.module.scss';
import { Link } from 'react-router-dom';
import { HOME, REGISTER } from '../../../utils/routes';

interface INavMenuLink {
  img: any;
  linkText: string;
}

const NavMenuLink = ({ img, linkText }: INavMenuLink) => (
  <li className={styles.navMenu__item}>
    <img className={styles.navMenu__icon} src={img} alt='img' />
    <span>{linkText}</span>
  </li>
);

const NavMenu = () => (
  <nav className={styles.navMenu}>
    <ul className={styles.navMenu__list}>
      <Link to={HOME}>
        <NavMenuLink img={main} linkText='Главная' />
      </Link>
      <Link to={REGISTER}>
        <NavMenuLink img={profile} linkText='Регистрация' />
      </Link>
      <NavMenuLink img={sound} linkText='True-Top' />
      <NavMenuLink img={nft} linkText='NFT-Music' />
    </ul>
  </nav>
);

export default NavMenu;
