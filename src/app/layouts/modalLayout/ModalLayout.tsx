import '../../styles/global.scss';
import { useNavigate } from 'react-router-dom';
import styles from './ModalLayout.module.scss';
import { LeftSideBar } from '../../../widgets/LeftSideBar';
import { RightSideBar } from '../../../widgets/RightSideBar';
import { SearchPanel } from '../../../features/SearchPanel';
import {BG} from "../../../shared/ui/Background/BG";

interface IBaseLayout {
    children: any;
}

export const ModalLayout = ({ children }: IBaseLayout) => {
    const navigate = useNavigate();

    return (
        <div className={styles.layoutWrapper}>
            <LeftSideBar />
            <BG/>
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
