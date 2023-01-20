import styles from './ProfileBlock.module.scss';
import profileLogo from '../../assets/png/profileLogo.png';
import { burger } from '../../utils/importSvg';
import { useUserInfoStore } from '../../store/UserInfoStore';

const ProfileBlock = () => {
  const { userName } = useUserInfoStore((state) => state);
  return (
    <div className={styles.profileWrapper}>
      <img src={burger} alt="" />
      <span className={styles.profileUsername}>{userName}</span>
      <img className={styles.profileAvatar} src={profileLogo} alt="" />
    </div>
  );
};

export { ProfileBlock };
