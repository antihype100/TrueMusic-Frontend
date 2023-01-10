import { main, profile, sound } from '../../../utils/importSvg';
import nft from '../../../assets/nft.png';
import styles from './NavMenu.module.scss';

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
      <NavMenuLink img={main} linkText='Главная' />
      <NavMenuLink img={profile} linkText='Регистрация' />
      <NavMenuLink img={sound} linkText='True-Top' />
      <NavMenuLink img={nft} linkText='NFT-Music' />
    </ul>
  </nav>
);

export default NavMenu;
