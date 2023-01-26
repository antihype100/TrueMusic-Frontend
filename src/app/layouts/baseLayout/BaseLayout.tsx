import React from 'react';
import { LeftSideBar } from '../../../widgets/LeftSideBar';
import { RightSideBar } from '../../../widgets/RightSideBar';
import '../../styles/global.scss';
import styles from './BaseLayout.module.scss';
import { SearchPanel } from '../../../features/SearchPanel';

interface IBaseLayout {
    children: any;
}

export const BaseLayout = ({ children }: IBaseLayout) => (
    <div className={styles.baseLayout}>
        <LeftSideBar />
        <section className={styles.sectionLayout}>
            <main className={styles.mainLayout}>
                <SearchPanel />
                {children}

            </main>
        </section>
        <RightSideBar />
    </div>
);
