import styles from '../Track/Track.module.scss';
import { Link } from 'react-router-dom';
import { ILeftContent } from '../../model/types';


export const LeftContent = ({ authorName, trackName, textColor }: ILeftContent) => {
    let authorNameClass = styles.authorName
    if (textColor === 'black') {
        authorNameClass = styles.authorName + 'black'
    }


    return (
        <div className={styles.leftContentWrapper}>
            <Link className={authorNameClass}
                  to={`/author/${authorName}/profile`}>
                {authorName}
            </Link>
            <Link to={`/author/${authorName}/tracks/${trackName}`}
                  className={styles.trackName}>
                {trackName}
            </Link>
            <span className={styles.presentTime}>00:00</span>
        </div>
    );
};