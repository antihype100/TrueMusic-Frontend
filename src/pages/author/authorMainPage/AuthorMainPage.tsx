import { Link, useParams } from 'react-router-dom';
import { TrackList } from '../../../features/TrackList';
import styles from './AuthorMainPage.module.scss';
import AuthorLayout from '../../../app/layouts/authorLayout/AuthorLayout';
import BaseLayout from '../../../app/layouts/baseLayout/BaseLayout';
import { useEffect, useState } from 'react';
import axios from '../../../shared/helper/axios';

const navList = [
    { id: 'main', href: '/', title: 'Треки' },
    { id: 'albums', href: '/', title: 'Альбомы' },
    { id: 'about', href: '/', title: 'Описание' },
];



const AuthorMainPage = () => {
    const { name } = useParams();

    const [trackList, setTrackList] = useState([])
    useEffect(() => {
        axios.get('track/all').then(res => {
            setTrackList(res.data)
        })
    }, [])

    return (
        <BaseLayout>
            <AuthorLayout author={name}>
                <div className={styles.authorMainPageWrapper}>
                    <nav className={styles.navBar}>
                        <Link className={styles.navLink} to='#'>
                            {navList[0].title}
                        </Link>
                        <Link className={styles.navLinkActive} to='#'>
                            {navList[1].title}
                        </Link>
                        <Link className={styles.navLink} to='#'>
                            {navList[2].title}
                        </Link>
                    </nav>
                    <TrackList amountTracks={5} tracksList={trackList} />
                </div>
            </AuthorLayout>
        </BaseLayout>
    );
};

export default AuthorMainPage;
