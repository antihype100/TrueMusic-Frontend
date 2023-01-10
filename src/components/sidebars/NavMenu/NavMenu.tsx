import { main, profile, sound } from '../../../utils/importSvg';
import nft from '../../../assets/nft.png';
import './NavMenu.scss';

const NavMenu = () => (
  <nav className='navMenu'>
    <ul className='navMenu__list'>
      <NavMenuLink img={main} linkText='Главная' />

      <NavMenuLink img={profile} linkText='Регистрация' />

      <NavMenuLink img={sound} linkText='True-Top' />

      <NavMenuLink img={nft} linkText='NFT-Music' />
    </ul>
  </nav>
);

interface INavMenuLink {
  img: any;
  linkText: string;
}

const NavMenuLink = ({ img, linkText }: INavMenuLink) => (
  <li className='navMenu__item'>
    <img className='navMenu__icon' src={img} alt='' />
    <span>{linkText}</span>
  </li>
);

export default NavMenu;
