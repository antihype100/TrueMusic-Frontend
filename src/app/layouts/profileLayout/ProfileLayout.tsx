import { LeftSideBar } from '@widgets/LeftSideBar';
import { RightSideBar } from '@widgets/RightSideBar';
import { ReactNode } from 'react';
import {BG} from "@shared/ui/Background/BG";
import styles from './ProfileLayout.module.scss';

interface IProfileLayout {
    children: ReactNode;
}

export const ProfileLayout = ({ children }: IProfileLayout) => (
    <div className={styles.baseLayout}>
        <LeftSideBar />
        <section className={styles.sectionLayout}>
            <BG/>
            <main className={styles.mainLayout}>
                <div className={styles.body}>{children}</div>
            </main>
        </section>
        <RightSideBar />
    </div>
);

