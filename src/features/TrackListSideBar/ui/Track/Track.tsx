import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Track.module.scss'

interface ITrack {
    img: any;
    author: string;
    trackName: string;
}

export const Track = ({ img, trackName, author }: ITrack) => (
    <li className={styles.trackItem}>
        <img className={styles.trackCover} src={img} alt='img' />
        <div className={styles.nameWrapper}>
            <Link className={styles.authorName} to={`/author/${author}/profile`}>
                {author}
            </Link>
            <Link to={`/author/${author}/tracks/${trackName}`} className={styles.trackName}>
                {trackName}
            </Link>
        </div>
    </li>
);


