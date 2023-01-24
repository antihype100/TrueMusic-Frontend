import styles from './ProfileLayout.module.scss';
import { LeftSideBar } from '../../../widgets/LeftSideBar';
import { Player } from '../../../widgets/Player';
import { RightSideBar } from '../../../widgets/RightSideBar';

interface IProfileLayout {
    children: any;
}

const ProfileLayout = ({ children }: IProfileLayout) => (
    <div className={styles.baseLayout}>
        <LeftSideBar />
        <section className={styles.sectionLayout}>
            <main className={styles.mainLayout}>
                <div className={styles.body}>{children}</div>
                <Player />
            </main>
        </section>
        <RightSideBar />
    </div>
);

export default ProfileLayout;