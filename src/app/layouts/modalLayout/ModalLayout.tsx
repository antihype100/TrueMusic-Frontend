import React from 'react';
import RightSideBar from '../../../widgets/RightSideBar/RightSideBar';
import '../../styles/global.scss';
import styles from './ModalLayout.module.scss';
import LeftSidebar from '../../../widgets/LeftSidebar/LeftSidebar';
import { useNavigate } from 'react-router-dom';
import { SearchPanel } from '../../../widgets/SearchPanel/SearchPanel';
import Player from '../../../widgets/Player/Player';

interface IBaseLayout {
    children: any;
}

const ModalLayout = ({ children }: IBaseLayout) => {
    const navigate = useNavigate();

    return (
        <div className={styles.layoutWrapper}>
            <LeftSidebar />
            <div className={styles.widgetsWrapper}>
                <SearchPanel />
                <div className={styles.modalWrapper}>
                    {children}
                </div>
                <Player />
            </div>
            <RightSideBar />
            <div onClick={() => navigate(-1)} className={styles.bgc}></div>
        </div>
    );
};

export default ModalLayout;
