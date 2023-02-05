import { useUserInfoStore } from '@entities/User/model/UserInfoStore';
import styles from './ProfileBlock.module.scss';
import { ProfileDescription } from '../ProfileDescription/ProfileDescription';
import { Setting } from '../ProfileSetting/ProfileSetting';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';


export const ProfileBlock = () => {
    const { userName } = useUserInfoStore((state) => state);

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.userName}>{userName}</h1>
            <ProfileInfo />
            <hr className={styles.profileHr}/>
            <ProfileDescription />
            <hr className={styles.profileHr}/>
            <Setting />
        </section>
    );
};

