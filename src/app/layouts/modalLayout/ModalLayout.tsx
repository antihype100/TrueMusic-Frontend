import '../../styles/global.scss';
import { LeftSideBar } from '@widgets/LeftSideBar';
import { RightSideBar } from '@widgets/RightSideBar';
import { SearchPanel } from '@features/SearchPanel';
import {BG} from "@shared/ui/Background/BG";
import styles from './ModalLayout.module.scss';

interface IBaseLayout {
    children: any;
}

export const ModalLayout = ({ children }: IBaseLayout) => {

    return(
        <div className={styles.layoutWrapper}>
            <LeftSideBar />
            <BG/>
            <div className={styles.widgetsWrapper}>
                <SearchPanel />
                <div className={styles.modalWrapper}>
                    {children}
                </div>
            </div>
             <RightSideBar/>
            <div className={styles.bgc} />
        </div>
    );
};

export default ModalLayout;
