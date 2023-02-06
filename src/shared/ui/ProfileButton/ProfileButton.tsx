import { Link } from "react-router-dom";
import styles from './ProfileButton.module.scss';

interface IProfileButton {
    userName: string;
    logoPath: string;
    to: string
}

const ProfileButton = ({userName, logoPath, to}: IProfileButton) => (
        <Link to={to} className={styles.profileWrapper}>
            <img className={styles.profileAvatar} src={logoPath} alt='' />
            <span className={styles.profileUsername}>{userName}</span>
        </Link>
    );

export { ProfileButton };
