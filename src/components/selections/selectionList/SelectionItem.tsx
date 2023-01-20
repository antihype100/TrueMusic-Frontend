import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SelectionList.module.scss';
import { IItemForSelection } from '../Selections';

const SelectionItem = ({ author, trackName, albumName, cover }: IItemForSelection) => {
  author = author.toLowerCase();

  return (
    <section className={styles.albumBlock}>
      <img src={cover} className={styles.img} alt="img" />
      <Link className={styles.nameAuthor} to={`/author/${author}/profile`}>
        {author}
      </Link>

      {trackName ? (
        <Link className={styles.nameAlbum} to={`/author/${author}/profile`}>
          {trackName}
        </Link>
      ) : null}
      <Link className={styles.nameAlbum} to={`/author/${author}/albums/${albumName}`}>
        {albumName}
      </Link>
    </section>
  );
};

export default SelectionItem;
