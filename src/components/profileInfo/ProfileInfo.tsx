import React from "react";
import styles from './ProfileInfo.module.scss'
import { control, list, music, settings, stats, upload } from "../../utils/importSvg";
import img from '../../assets/album.png'

const info = [
  {text: 'Дата регистрации:', value: '06.10.2019'},
  {text: 'Подписчики:', value: '8'},
  {text: 'Добавлений в избранное:', value: '325423'},
  {text: 'Прослушиваний:', value: '325423'},
  {text: 'Количество треков на площадке:', value: '124'},
  {text: 'Количество треков на площадке:', value: '325423'},
]

const ProfileInfo = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.name}>
        Kizaru
      </h1>
      <div className={styles.infoBlock}>
        <img src={img} alt="author" />
        <ul>
          {info.map(({text, value}) =>
            <li className={styles.info}>
              <div>{text} <span>{value}</span></div>
            </li>
          )}
        </ul>
      </div>
      <hr/>
      <div className={styles.about}>
        <h2 className={styles.title}>Описание</h2>
        <p>Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно вот этого вот почаще?</p>
      </div>
      <hr/>
      <div className={styles.settingBlock}>
        <h2 className={styles.title}>Настройки</h2>
        <div className={styles.settings}>
          <ul className={styles.settingList}>
            <li className={styles.setting}>
              <img src={settings} alt="icon" />
              <button type='button'>Сменить пароль</button>
            </li>
            <li className={styles.setting}>
              <img src={list} alt="icon" />
              <button type='button'>Получить  треклист</button>
            </li>
            <li className={styles.setting}>
              <img src={control} alt="icon" />
              <button type='button'>Управление интерфейсом</button>
            </li>
            <li className={styles.setting}>
              <img src={music} alt="icon" />
              <button type='button'>Стать исполнителем</button>
            </li>
            <li className={styles.setting}>
              <img src={stats} alt="icon" />
              <button type='button'>Статистика треков</button>
            </li>
            <li className={styles.setting}>
              <img src={stats} alt="icon" />
              <button type='button'>Статистика публикаций</button>
            </li>
            <li className={styles.setting}>
              <img src={upload} alt="icon" />
              <button type='button'>Сделать релиз</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;