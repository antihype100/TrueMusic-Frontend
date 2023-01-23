import { main, message, profile, sound } from '../../../shared/helper/importSvg';
import { HOME, REGISTER } from '../../../shared/helper/routes';
import nft from '../../../assets/sidebar/navmenu/nft.png';


export const getUserNavMenuList = (userName: string) => {
    return [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Профиль', img: profile, to: `/user/${userName}` },
        { linkText: 'Моя коллекция', img: profile, to: `/user/${userName}/playlists` },
        { linkText: 'Сообщения', img: message, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];

};

export const getAuthorNavMenuList = (userName: string) => {
    return [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Профиль', img: profile, to: `/author/${userName}` },
        { linkText: 'Моя коллекция', img: profile, to: `/author/${userName}/playlists` },
        { linkText: 'Сообщения', img: message, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];

};
export const getNoAuthNavMenuList = () => {
    return [
        { linkText: 'Главная', img: main, to: HOME },
        { linkText: 'Регистрация', img: profile, to: REGISTER },
        { linkText: 'True-Top', img: sound, to: '#' },
        { linkText: 'NFT-Music', img: nft, to: '#' },
    ];

};


