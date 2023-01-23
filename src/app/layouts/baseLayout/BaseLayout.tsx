import React from 'react';
import { LeftSideBar } from '../../../widgets/LeftSideBar';
import {RightSideBar} from '../../../widgets/RightSideBar';
import '../../styles/global.scss';
import styles from './BaseLayout.module.scss';
import { SearchPanel } from '../../../widgets/SearchPanel';
import { Player } from '../../../widgets/Player';

interface IBaseLayout {
  children: any;
}

const BaseLayout = ({ children }: IBaseLayout) => (
  <div className={styles.baseLayout}>
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

export default BaseLayout;
