import React from 'react';
import styles from './PlaylistSideBar.module.scss';

interface ITrack {
  img: any;
  authorName: string;
  trackName: string;
}

const PlaylistTrack = ({ img, trackName, authorName }: ITrack) => (
  <li className={styles.PlaylistItem}>
    <img src={img} alt='img' />
    <div className={styles.nameWrapper}>
      <span className={styles.authorName}>{authorName}</span>
      <span className={styles.trackName}>{trackName}</span>
    </div>
  </li>
);

export default PlaylistTrack;
