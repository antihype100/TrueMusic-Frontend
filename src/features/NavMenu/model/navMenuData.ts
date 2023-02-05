import { main, message, profile, sound } from '@shared/helper/importSvg';
import { HOME, REGISTER } from '@shared/helper/routes';
import nft from '../../../assets/sidebar/navmenu/nft.png';



export const getUserNavMenuList = (userName: string) => [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Профиль', img: profile, to: `/user/${userName}` },
        { linkText: 'Избранные треки', img: profile, to: `/user/${userName}/playlists` },
        { linkText: 'Сообщения', img: message, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];

export const getAuthorNavMenuList = (userName: string) => [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Профиль', img: profile, to: `/author/${userName}` },
        { linkText: 'Избранные треки', img: profile, to: `/author/${userName}/playlists` },
        { linkText: 'Мои релизы', img: profile, to: `/author/${userName}/playlists` },
        { linkText: 'Сообщения', img: message, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];
export const getNoAuthNavMenuList = () => [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Войти', img: profile, to: REGISTER },
        { linkText: 'Поиск', img: profile, to: REGISTER },
        { linkText: 'True-Top', img: sound, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];


