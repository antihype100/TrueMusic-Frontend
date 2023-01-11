import { main, profile, sound } from "../../../utils/importSvg";
import nft from "../../../assets/nft.png";
import styles from "./NavMenu.module.scss";
import { Link } from "react-router-dom";
import { HOME, REGISTER } from "../../../utils/routes";

interface INavMenuLink {
  img: any;
  linkText: string;
  to: string
}

const NavMenuLink = ({ img, linkText, to }: INavMenuLink) => (
  <li className={styles.navMenu__item}>
    <Link className={styles.navMenu__link}  to={to}>
      <img className={styles.navMenu__icon} src={img} alt="img" />
      <span>{linkText}</span>
    </Link>
  </li>
);

const NavMenu = () => (
  <nav className={styles.navMenu}>
    <ul className={styles.navMenu__list}>
      <NavMenuLink to={HOME} img={main} linkText="Главная" />
      <NavMenuLink to={REGISTER} img={profile} linkText="Регистрация" />
      <NavMenuLink to={REGISTER} img={sound} linkText="True-Top"/>
      <NavMenuLink to='#' img={nft} linkText="NFT-Music" />
    </ul>
  </nav>
);

export default NavMenu;
