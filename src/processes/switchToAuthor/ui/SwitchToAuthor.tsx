import {ModalLayout} from '@app/layouts/modalLayout/ModalLayout';
import axios from "@shared/api/axios";
import styles from './SwitchToAuthor.module.scss'

export const SwitchToAuthor = () => {

    const switchToAuthor = () => {
        axios.put('user/switchToAuthor', {accessToken: localStorage.getItem('accessToken')})
    }

    return (
        <ModalLayout>
            <button onClick={switchToAuthor} className={styles.pass}>
                Стать исполнителем
            </button>
        </ModalLayout>
    );
};

