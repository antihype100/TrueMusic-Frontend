import { NavMenu } from '@features/NavMenu';
import {ProfileButton} from "@shared/ui/ProfileButton/ProfileButton";
import {useUserInfoStore} from "@entities/User";
import {USER_SETTING} from "@shared/helper/routes";
import styles from './LeftSideBar.module.scss';
import nLogo from '../../../../assets/png/Frame 7.png'

export const LeftSideBar = () => {

    const { auth, userName} = useUserInfoStore((state) => state);


    return (
        <aside className={styles.leftSideBar}>
            <img className={styles.logo} src={nLogo} alt='' />
            {auth
                ? <ProfileButton
                    userName={userName}
                    logoPath="https://p9-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/9091fcb52e944c0ea27f147aaa94dd5a~tplv-mlhdmxsy5m-q75:0:0.image"
                    to={USER_SETTING}
                />
                : null}
            <NavMenu />
            <hr className={styles.leftSidebarHr} />
        </aside>
    );
};
