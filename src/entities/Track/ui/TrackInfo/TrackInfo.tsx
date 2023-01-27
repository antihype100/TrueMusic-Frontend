import {Link} from 'react-router-dom';
import styles from '../Track/Track.module.scss';
import {ITrackInfoProps} from '../../model/types';


export const TrackInfo = ({authorName, trackName, textColor = 'white', fontSize}: ITrackInfoProps) => (
    <div className={styles.trackInfoWrapper}>
        <Link
            className={styles.authorName}
            style={
                {
                    fontSize: `calc((100vw - 480px) / (1280 - 480) * (18 - 16) + ${fontSize}px)`,
                    color: `${textColor}`
                }
            }
            to={`/author/${authorName}/profile`}

        >
            {authorName}
        </Link>
        <Link
            className={styles.trackName}
            style={{fontSize: `calc((100vw - 480px) / (1280 - 480) * (18 - 16) + ${fontSize}px)`}}
            to={`/author/${authorName}/tracks/${trackName}`}
        >
            {trackName}
        </Link>
    </div>
);