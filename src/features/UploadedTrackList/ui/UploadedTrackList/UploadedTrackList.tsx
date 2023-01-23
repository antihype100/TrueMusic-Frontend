import styles from './UploadedTrackList.module.scss';
import { IUploadedTrackList } from '../../model/types';
import { NextStepButton } from '../../../../shared/ui/NextStepButton/NextStepButton';




export const UploadedTrackList = ({ albumName, trackList }: IUploadedTrackList) => {


    return (
        <div className={styles.uploadedTrackListWrapper}>
            <h2 className={styles.uploadedTrackListHeader}>Альбом {albumName}</h2>
            {trackList.map(el => el)}
            <NextStepButton text={'Загрузить альбом'} action={() => {console.log(10)}}/>
        </div>
    );
};