import styles from './UploadedTrackList.module.scss';
import { Track } from '../../../../entities/Track';
import { useUserInfoStore } from '../../../../entities/User';
import type { IUploadedTrackListProps } from '../../model/types';
import { NextStepButton } from '../../../../shared/ui/NextStepButton/NextStepButton';




export const UploadedTrackList = ({ albumName, trackList, sendRelease }: IUploadedTrackListProps) => {

    const {userName} = useUserInfoStore()
    console.log(trackList);

    return (
        <div className={styles.uploadedTrackListWrapper}>
            <h2 className={styles.uploadedTrackListHeader}>Альбом {albumName}</h2>
            <div className={styles.wrapperForPaddingScroll}>
                <ul className={styles.uploadedTrackList}>
                    {trackList.map((el, index) => {
                        return (
                            <Track
                                trackDuration={el.trackDuration}
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