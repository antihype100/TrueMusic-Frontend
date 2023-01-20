import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PlaylistSideBar.module.scss';

interface ITrack {
  img: any;
  author: string;
  trackName: string;
}

const PlaylistTrack = ({ img, trackName, author }: ITrack) => (
  <li className={styles.PlaylistItem}>
    <img className={styles.img} src={img} alt="img" />
    <div className={styles.nameWrapper}>
      <Link className={styles.authorName} to={`/author/${author.toLowerCase()}/profile`}>
        {author}
      </Link>
      <Link to={`/author/${author.toLowerCase()}/tracks/${trackName.toLowerCase()}`} className={styles.trackName}>
        {trackName}
      </Link>
    </div>
  </li>
);

export default PlaylistTrack;
