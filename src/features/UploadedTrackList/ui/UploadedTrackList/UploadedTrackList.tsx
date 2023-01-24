import styles from './UploadedTrackList.module.scss';
import { IUploadedTrackListProps } from '../../model/types';
import { NextStepButton } from '../../../../shared/ui/NextStepButton/NextStepButton';
import { Track } from '../../../../entities/Track';
import { useUserInfoStore } from '../../../../entities/User/model/UserInfoStore';




export const UploadedTrackList = ({ albumName, trackList, sendRelease }: IUploadedTrackListProps) => {

    const {userName} = useUserInfoStore()

    return (
        <div className={styles.uploadedTrackListWrapper}>
            <h2 className={styles.uploadedTrackListHeader}>Альбом {albumName}</h2>
            <div className={styles.wrapperForPaddingScroll}>
                <ul className={styles.uploadedTrackList}>
                    {trackList.map((el, index) => {
                        return (
                            <Track
                                trackPosition={index + 1}
                                authorName={userName}
                                trackName={el.trackName}
                                trackPath={el.trackPath}
                                textColor={'black'}
                            />
                        )
                    })}
                </ul>
            </div>
            <NextStepButton text={'Загрузить альбом'} action={sendRelease}/>
        </div>
    );
};