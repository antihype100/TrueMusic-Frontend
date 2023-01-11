import React from 'react';
import RightSideBar from '../../sidebars/RightSideBar/RightSideBar';
import '../../../styles/global.scss';
import styles from './ModalLayout.module.scss';
import LeftSidebar from '../../sidebars/LeftSidebar/LeftSidebar';
import { useNavigate } from 'react-router-dom';

interface IBaseLayout {
  children: any;
}

const ModalLayout = ({ children }: IBaseLayout) => {
  return (
    <div className={styles.layoutWrapper}>
      <LeftSidebar />
      {children}
      <RightSideBar />
    </div>
  );
};

export default ModalLayout;
