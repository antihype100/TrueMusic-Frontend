import { useUserInfoStore } from '../../../User/model/UserInfoStore';
import styles from './ProfileSetting.module.scss';
import img from '../../../../assets/sidebar/playlist/cover7.png';
import { Link } from 'react-router-dom';
import { settings, upload } from '../../../../shared/helper/importSvg';
import React from 'react';

const userSetting = [
    { img: settings, buttonText: 'Сменить пароль' },
    { img: settings, buttonText: 'Получить трек лист' },
    { img: settings, buttonText: 'Управление интерфейсом' },
    { img: settings, buttonText: 'Стать исполнителем' },
];

const authorSetting = [
    { img: settings, buttonText: 'Получить трек лист' },
    { img: settings, buttonText: 'Получить трек лист' },
    { img: settings, buttonText: 'Получить трек лист' },
    { img: settings, buttonText: 'Получить трек лист' },
];


export const Setting = () => {
    const { userName, role } = useUserInfoStore((state) => state);
    const settingList = role === 'AUTHOR' ? authorSetting : userSetting;
    return (
        <div className={styles.settingBlock}>
            <h2 className={styles.title}>Настройки</h2>
            <div className={styles.settings}>
                <ul className={styles.settingList}>
                    {settingList.map((setting) => {
                        return (
                            <li className={styles.setting}>
                                <img src={setting.img} alt='' />
                                <button>{setting.buttonText}</button>
                            </li>
                        );
                    })}
                    <li className={styles.setting}>
                        <Link to={`/${userName}/release-design`}>
                            <img src={upload} alt='icon' />
                            <button type='button'>Сделать релиз</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};