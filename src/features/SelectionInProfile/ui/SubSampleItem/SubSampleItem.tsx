import { Link } from 'react-router-dom';
import styles from './SubSampleItem.module.scss';
import type { IItemForSelection } from '../../model/types';

export const SubSampleItem = ({ author, trackName, albumName, cover }: IItemForSelection) => {
    author = author.toLowerCase();

    return (
        <section className={styles.albumBlock}>
            <img src={cover} className={styles.albumCover} alt='img' />
            <Link className={styles.authorName} to={`/author/${author}/profile`}>
                {author}
            </Link>

            {trackName ? (
                <Link className={styles.albumName} to={`/author/${author}/profile`}>
                    {trackName}
                </Link>
            ) : null}
            <Link className={styles.albumName} to={`/author/${author}/albums/${albumName}`}>
                {albumName}
            </Link>
        </section>
    );
};
