import React from 'react';
import styles from './ProfileInfo.module.scss';
import { control, list, music, settings, stats, upload } from '../../utils/importSvg';
import img from '../../assets/sidebar/playlist/cover7.png';
import { Link } from 'react-router-dom';
import { useUserInfoStore } from '../../store/UserInfoStore';

const infoAuthor = [
  { text: 'Дата рождения:', value: '06.10.1987' },
  { text: 'Место рождения:', value: 'Санкт-Петербург' },
  { text: 'Дата регистрации:', value: '06.10.2019' },
  { text: 'Подписчики:', value: '8' },
  { text: 'Добавлений в избранное:', value: '325423' },
  { text: 'Прослушиваний:', value: '325423' },
  { text: 'Количество треков на площадке:', value: '124' },
  { text: 'Количество треков на площадке:', value: '325423' },
];

interface IAuthorInfo {
  authorOrUserName?: string;
}

const ProfileInfo = () => {
  const { userName } = useUserInfoStore((state) => state);
  return (
    <section className={styles.wrapper}>
      <div>
        <h1 className={styles.name}>{userName}</h1>
        <div className={styles.infoBlock}>
          <img src={img} alt="author" />
          <Info />
        </div>
        <hr />
        <div className={styles.about}>
          <h2 className={styles.title}>Описание</h2>
          <p>
            Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно вот этого вот
            почаще?
          </p>
        </div>
        <hr />
      </div>
      <Setting />
    </section>
  );
};

const Info = () => {
  return (
    <ul>
      {infoAuthor.map(({ text, value }, i) => (
        <li key={i} className={styles.info}>
          <div>
            {text} <span>{value}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

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

const Setting = () => {
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
                <img src={setting.img} alt="" />
                <button>{setting.buttonText}</button>
              </li>
            );
          })}
          <li className={styles.setting}>
            <Link to={`/${userName}/release-design`}>
              <img src={upload} alt="icon" />
              <button type="button">Сделать релиз</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
