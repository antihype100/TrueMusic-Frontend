import {useUserInfoStore} from '@entities/User/model/UserInfoStore';
import {Link} from 'react-router-dom';
import {settings, upload} from '@shared/helper/importSvg';
import React from 'react';
import {USER_SWITCH_TO_AUTHOR} from "@shared/helper/routes";
import img from '../../../../assets/sidebar/playlist/cover7.png';
import styles from './ProfileSetting.module.scss';




export const Setting = () => {
    const {userName, role} = useUserInfoStore((state) => state);

    const authorSetting = [
        {img: settings, buttonText: 'Сменить пароль', to: `/${userName}/release-design`},
        {img: settings, buttonText: 'Управление интерфейсом', to: `/${userName}/release-design`},
        {img: upload, buttonText: 'Сделать релиз', to: `/${userName}/release-design`},
    ];
    const userSetting = [
        {img: settings, buttonText: 'Сменить пароль', to: `/${userName}/release-design`},
        {img: settings, buttonText: 'Управление интерфейсом', to: `/${userName}/release-design`},
        {img: settings, buttonText: 'Стать исполнителем', to: USER_SWITCH_TO_AUTHOR},
    ];

    const settingList = role === 'AUTHOR' ? authorSetting : userSetting;
    return (
        <div className={styles.settingBlock}>
            <h2 className={styles.title}>Настройки</h2>
            <ul className={styles.settingList}>
                {settingList.map((setting) => (
                    <li className={styles.setting}>
                        <Link to={setting.to}>
                            <img src={setting.img} alt=''/>
                            <button>{setting.buttonText}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};