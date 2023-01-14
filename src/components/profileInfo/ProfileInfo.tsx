import React from 'react';
import styles from './ProfileInfo.module.scss';
import { control, list, music, settings, stats, upload } from '../../utils/importSvg';
import img from '../../assets/sidebar/playlist/cover7.png';
import { Link } from 'react-router-dom';

const infoAuthor = [
  { text: 'Дата рождения:', value: '06.10.1987' },
  { text: 'Место рождения:', value: 'Санкт-Петербург' },
  { text: 'Дата регистрации:', value: '06.10.2019' },
  { text: 'Подписчики:', value: '8' },
  { text: 'Добавлений в избранное:', value: '325423' },
  { text: 'Прослушиваний:', value: '325423' },
  { text: 'Количество треков на площадке:', value: '124' },
  { text: 'Количество треков на площадке:', value: '325423' }
];

interface IAuthorInfo {
  authorName?: string;
}

const ProfileInfo = ({ authorName }: IAuthorInfo) => {
  const user = true;
  const author = false;

  return (
    <section className={styles.wrapper}>
      <div>
        <h1 className={styles.name}>{authorName}</h1>
        <div className={styles.infoBlock}>
          <img src={img} alt='author' />
          <Info />
        </div>
        <hr />
        <div className={styles.about}>
          <h2 className={styles.title}>Описание</h2>
          <p>
            Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно
            вот этого вот почаще?
          </p>
        </div>
        <hr />
      </div>
      {author ? (
        <Setting />
      ) : (
        <Link to={`/author/${authorName}/authorMainPage`} className={styles.linkMainPage}>
          Перейти на главную страницу автора
        </Link>
      )}
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

const Setting = () => {
  return (
    <div className={styles.settingBlock}>
      <h2 className={styles.title}>Настройки</h2>
      <div className={styles.settings}>
        <ul className={styles.settingList}>
          <li className={styles.setting}>
            <img src={settings} alt='icon' />
            <button type='button'>Сменить пароль</button>
          </li>
          <li className={styles.setting}>
            <img src={list} alt='icon' />
            <button type='button'>Получить треклист</button>
          </li>
          <li className={styles.setting}>
            <img src={control} alt='icon' />
            <button type='button'>Управление интерфейсом</button>
          </li>
          <li className={styles.setting}>
            <img src={music} alt='icon' />
            <button type='button'>Стать исполнителем</button>
          </li>
          <li className={styles.setting}>
            <img src={stats} alt='icon' />
            <button type='button'>Статистика треков</button>
          </li>
          <li className={styles.setting}>
            <img src={stats} alt='icon' />
            <button type='button'>Статистика публикаций</button>
          </li>
          <li className={styles.setting}>
            <img src={upload} alt='icon' />
            <button type='button'>Сделать релиз</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
