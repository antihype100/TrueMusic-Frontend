
import styles from './ProfileBlock.module.scss'
import profileLogo from '../../assets/png/profileLogo.png'
import { burger } from "../../utils/importSvg";

const ProfileBlock = () => {

    return (
        <div className={styles.profileWrapper}>
          <img src={burger} alt=""/>
          <span className={styles.profileUsername}>antihype100</span>
          <img src={profileLogo} alt=""/>
        </div>
    )
}

export {ProfileBlock}