import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthorLayout } from '@app/layouts/authorLayout/AuthorLayout';
import { BaseLayout } from '@app/layouts/baseLayout/BaseLayout';
import { TrackList } from '@features/TrackList';
import { getAllTracks } from '@shared/api/getAllTracks';
import styles from './AuthorMainPage.module.scss';
import { getNavList } from '../../model/getNavList';


export const AuthorMainPage = () => {
    const { name } = useParams();

    const [trackList, setTrackList] = useState([])
    useEffect(() => {
        getAllTracks().then(res => {
            setTrackList(res.data)
        })
    }, [])

    const navList = getNavList()
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
                    <TrackList/>
                </div>
            </AuthorLayout>
        </BaseLayout>
    );
};
