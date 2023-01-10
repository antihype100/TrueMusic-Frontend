import React from 'react';
import LeftSideBar from '../sidebars/LeftSidebar/LeftSidebar';
import RightSideBar from '../sidebars/RightSideBar/RightSideBar';
import { SearchPanel } from '../searchPanel/SearchPanel';
import Player from '../player/Player';
import styles from './BaseLayout.module.scss';

interface IBaseLayoutNoAuth {
  children: any;
}

const BaseLayout = ({ children }: IBaseLayoutNoAuth) => {
  return (
    <div className='baseLayoutNoAuth'>
      <LeftSideBar />

      <section className={styles.sectionLayout}>
        <main className={styles.mainLayout}>
          <SearchPanel />
          {children}
          <Player />
        </main>
      </section>

      <RightSideBar />
    </div>
  );
};

export default BaseLayout;
