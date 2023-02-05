import { useUserInfoStore} from "@entities/User";
import styles from './ProfileButton.module.scss';
import profileLogo from '../../../assets/png/profileLogo.png';
import { burger } from '../../helper/importSvg';

const ProfileButton = () => {
    const { userName } = useUserInfoStore((state) => state);
    return (
        <div className={styles.profileWrapper}>
            <img src={burger} alt='' />
            <span className={styles.profileUsername}>{userName}</span>
            <img className={styles.profileAvatar} src={profileLogo} alt='' />
        </div>
    );
};

export { ProfileButton };
