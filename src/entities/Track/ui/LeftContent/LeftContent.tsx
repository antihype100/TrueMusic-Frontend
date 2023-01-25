import styles from '../Track/Track.module.scss';
import { Link } from 'react-router-dom';
import { ILeftContent } from '../../model/types';


export const LeftContent = ({ authorName, trackName, textColor, currentTime }: ILeftContent) => {

    return (
        <div className={styles.leftContentWrapper}>
            <Link className={textColor ? styles.blackTextAuthorName : styles.whiteTextAuthorName}
                  to={`/author/${authorName}/profile`}>
                {authorName}
            </Link>
            <Link to={`/author/${authorName}/tracks/${trackName}`}
                  className={styles.trackName}>
                {trackName}
            </Link>
            <span className={styles.currentTime}>
                {Math.floor(currentTime / 60).toString().padStart(2, '0')}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
            </span>
        </div>
    );
};