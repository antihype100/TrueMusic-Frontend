import React from 'react';
import LeftSideBar from '../sidebars/LeftSidebar/LeftSidebar';
import RightSideBar from '../sidebars/RightSideBar/RightSideBar';
import '../../styles/global.scss';

interface IBaseLayoutNoAuth {
  children: any;
}

const BaseLayout = ({ children }: IBaseLayoutNoAuth) => (
  <div className='baseLayoutNoAuth'>
    <LeftSideBar />
    {children}
    <RightSideBar />
  </div>
);

export default BaseLayout;
