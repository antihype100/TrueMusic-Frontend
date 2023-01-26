import styles from './ProfileLayout.module.scss';
import { LeftSideBar } from '../../../widgets/LeftSideBar';
import { RightSideBar } from '../../../widgets/RightSideBar';
import { ReactNode } from 'react';

interface IProfileLayout {
    children: ReactNode;
}

export const ProfileLayout = ({ children }: IProfileLayout) => (
    <div className={styles.baseLayout}>
        <LeftSideBar />
        <section className={styles.sectionLayout}>
            <main className={styles.mainLayout}>
                <div className={styles.body}>{children}</div>
            </main>
        </section>
        <RightSideBar />
    </div>
);

