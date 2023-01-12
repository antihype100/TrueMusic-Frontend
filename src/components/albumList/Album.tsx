import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AlbumList.module.scss';
import img from '../../assets/album.png';
import { AUTHOR } from '../../utils/routes';

const Album = () => (
    <section className={styles.albumBlock}>
      <img src={img} className={styles.img} alt='img' />
      <Link className={styles.nameAlbum}to={AUTHOR}>Kizaru</Link>
    </section>
  );

export default Album;
