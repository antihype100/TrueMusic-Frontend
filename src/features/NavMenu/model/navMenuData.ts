import { main, message, profile, sound } from '@shared/helper/importSvg';
import {HOME, LOGIN, REGISTER, USER_FAVORITES} from '@shared/helper/routes';
import nft from '../../../assets/sidebar/navmenu/nft.png';



export const getUserNavMenuList = (userName: string) => [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Поиск', img: profile, to: `/search` },
        { linkText: 'Избранное', img: profile, to: USER_FAVORITES },
        { linkText: 'Подписки', img: profile, to: USER_FAVORITES },
        { linkText: 'Уведомления', img: profile, to: `/user/${userName}` },
        { linkText: 'Сообщения', img: message, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];

export const getAuthorNavMenuList = (userName: string) => [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Поиск', img: profile, to: `/user/${userName}` },
        { linkText: 'Избранное', img: profile, to: USER_FAVORITES },
        { linkText: 'Мои релизы', img: profile, to: `/author/${userName}/playlists` },
        { linkText: 'Подписки', img: profile, to: USER_FAVORITES },
        { linkText: 'Уведомления', img: profile, to: `/user/${userName}` },
        { linkText: 'Сообщения', img: message, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];
export const getNoAuthNavMenuList = () => [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Войти', img: profile, to: LOGIN },
        { linkText: 'Поиск', img: profile, to: REGISTER },
        { linkText: 'True-Top', img: sound, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];


