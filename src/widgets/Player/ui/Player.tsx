import styles from './Player.module.scss';
import { Track } from '../../../entities/Track';
import { baseUrl } from '../../../shared/helper/baseUrl';
import { memo, useEffect } from 'react';
import { useUserInfoStore } from '../../../entities/User/model/UserInfoStore';

export const Player = memo(() => {
    const {auth} = useUserInfoStore(state => state)

    return (
        <div className={styles.player}>
            <div className={styles.contentWrapper}>
                <Track authorName={'ewff'} trackName={'wefwef'} trackPath={`${baseUrl}/track/Kizaru/Там где тебя нет/Ha Ha Ha.mp3`}/>
            </div>
        </div>
    );
})
