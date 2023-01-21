import { Link } from 'react-router-dom';
import { main, profile, sound, message } from '../../../utils/importSvg';
import nft from '../../../assets/sidebar/navmenu/nft.png';
import styles from './NavMenu.module.scss';
import { HOME, REGISTER } from '../../../utils/routes';
import { useUserInfoStore } from '../../../store/UserInfoStore';

interface INavMenuLink {
  img: any;
  linkText: string;
  to: string;
}

const noAuthNavMenuList = [
  { linkText: 'Главная', img: main, to: HOME },
  { linkText: 'Регистрация', img: profile, to: REGISTER },
  { linkText: 'True-Top', img: sound, to: '#' },
  { linkText: 'NFT-Music', img: nft, to: '#' },
];

const NavMenuLink = ({ img, linkText, to }: INavMenuLink) => (
  <li className={styles.navMenu__item}>
    <Link className={styles.navMenu__link} to={to}>
      <img className={styles.navMenu__icon} src={img} alt="img" />
      <span>{linkText}</span>
    </Link>
  </li>
);

const NavMenu = () => {
  const {userName, role, auth} = useUserInfoStore(state => state)

  const UserNavMenuList = [
    { linkText: 'Главная', img: main, to: HOME },
    { linkText: 'Профиль', img: profile, to: `/user/${userName}` },
    { linkText: 'Моя коллекция', img: profile, to: `/user/${userName}/playlists` },
    { linkText: 'Сообщения', img: message, to: '#' },
    { linkText: 'NFT-Music', img: nft, to: '#' },
  ];

  const AuthorNavMenuList = [
    { linkText: 'Главная', img: main, to: HOME },
    { linkText: 'Профиль', img: profile, to: `/author/${userName}` },
    { linkText: 'Моя коллекция', img: profile, to: `/author/${userName}/playlists` },
    { linkText: 'Сообщения', img: message, to: '#' },
    { linkText: 'NFT-Music', img: nft, to: '#' },
  ];

  let navMenuList = auth ? AuthorNavMenuList : noAuthNavMenuList;

  return (
    <nav className={styles.navMenu}>
      <ul className={styles.navMenu__list}>
        {navMenuList.map((navLink) => (
          <NavMenuLink to={navLink.to} img={navLink.img} linkText={navLink.linkText} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
