import '../../styles/global.scss';
import styles from './ModalLayout.module.scss';
import { useNavigate } from 'react-router-dom';
import { LeftSideBar } from '../../../widgets/LeftSideBar';
import {RightSideBar} from '../../../widgets/RightSideBar';
import { SearchPanel } from '../../../features/SearchPanel';

interface IBaseLayout {
    children: any;
}

export const ModalLayout = ({ children }: IBaseLayout) => {
    const navigate = useNavigate();

    return (
        <div className={styles.layoutWrapper}>
            <LeftSideBar />
            <div className={styles.widgetsWrapper}>
                <SearchPanel />
                <div className={styles.modalWrapper}>
                    {children}
                </div>
            </div>
            <RightSideBar />
            <div onClick={() => navigate(-1)} className={styles.bgc}></div>
        </div>
    );
};

export default ModalLayout;
