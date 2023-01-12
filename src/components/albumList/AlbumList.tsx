import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Album from './Album';
import styles from './AlbumList.module.scss';

interface IAlbumList {
  category: string;
}

const AlbumList = ({ category }: IAlbumList) => {
  const [arrLength, setArrLength] = useState(3);
  const [more, setMore] = useState(false);

  const showMore = () => {
    setArrLength(12);
    setMore(true);
  };
  const showLess = () => {
    setArrLength(3);
    setMore(false);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <h2>{category}</h2>
        {!more ? (
          <button type='button' onClick={showMore}>
            Показать все
          </button>
        ) : (
          <button type='button' onClick={showLess}>
            Скрыть
          </button>
        )}
      </div>
      <ul className={styles.list}>
        {Array.from(Array(arrLength).keys()).map((i) => (
          <li key={i}>
            <Link to={''}>
              <Album />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AlbumList;
