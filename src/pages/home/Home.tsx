import { MainPlaylist } from '../../widgets/MainPlaylist';
import styles from './Home.module.scss';
import { SignInUpButtons } from '../../features/AuthButton';
import BaseLayout from '../../app/layouts/baseLayout/BaseLayout';
import { useUserInfoStore } from '../../entities/User/model/UserInfoStore';
import { ProfileBlock } from '../../entities/ProfileBlock/ProfileBlock';
import { NavMenuPlaylist } from '../../features/NavMenuPlaylist';
import { useEffect, useState } from 'react';
import axios from '../../shared/helper/axios';


const tracksList = [
    { authorName: 'Kizaru', trackName: 'Messege', duration: 534, likes: 234234, audition: 846532 },
    { authorName: '6BLACK', trackName: 'Ex Calling', duration: 234, likes: 3244, audition: 9805 },
    { authorName: 'Instasamka', trackName: 'Pop star', duration: 349, likes: 243674, audition: 35325 },
    { authorName: 'Cold carti', trackName: 'ILY', duration: 434, likes: 234234, audition: 324679 },
    { authorName: 'DJ Snake', trackName: 'Middle', duration: 134, likes: 34324, audition: 65332 },
    { authorName: 'Kizaru', trackName: 'Мне это не нужно', duration: 224, likes: 8709, audition: 2167976 },
];

const Home = () => {
    const amountTracks = window.screen.height > 1100 ? 8 : 6;
    const { auth } = useUserInfoStore((state) => state);
    const [trackList, setTrackList] = useState([])
    useEffect(() => {
            axios.get('track/all').then(res => {
                setTrackList(res.data)
            })
        }, [])
    console.log(trackList);
    return (
        <BaseLayout>
            <div className={styles.homeContentWrapper}>

                <NavMenuPlaylist />
                <MainPlaylist amountTracks={amountTracks} tracksList={trackList} />
            </div>
            {auth ? <ProfileBlock /> : <SignInUpButtons />}
        </BaseLayout>
    );
};
export default Home;
