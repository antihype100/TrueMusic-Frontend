import {useUserInfoStore} from '@entities/User';
import {useReleaseStore} from "@processes/release/CreateRelease";
import {useGlobalTrackStore} from "@widgets/Player/model/globalTrackStore";
import {Track} from '@entities/Track';
import {NextStepButton} from '@shared/ui/NextStepButton/NextStepButton';
import {setTrackWrapper} from "@features/UploadedTrackList/helper/setTrack";
import {playPauseWrapper} from "@entities/Track/helpler/playPause";
import styles from './UploadedTrackList.module.scss';
import type {IUploadedTrackListProps} from '../../model/types';

export const UploadedTrackList = ({albumName, trackList, sendRelease}: IUploadedTrackListProps) => {

    const {setTrackInfoGlobal, globalTrackInfo, audioRefGlobal} = useGlobalTrackStore(state => state)
    const {coverPath} = useReleaseStore(state => state.release)
    const {userName} = useUserInfoStore()
    const coverWidthHeight = (window.screen.width - 480) / (1280 - 480) * (18 - 16) + 45
    const fontSize = (window.screen.width - 480) / (1280 - 480) * (17 - 16) + 10

    return (
        <div className={styles.uploadedTrackListWrapper}>
            <h2 className={styles.uploadedTrackListHeader}>Альбом {albumName}</h2>
            <div className={styles.wrapperForPaddingScroll}>
                <ul className={styles.uploadedTrackList}>
                    {trackList.map(({trackPath, trackName, trackDuration}) => {
                        const setTrack = setTrackWrapper(setTrackInfoGlobal, globalTrackInfo, trackName, trackDuration, trackPath, userName, coverPath)
                        const playPause = playPauseWrapper(trackName, globalTrackInfo, userName, setTrackInfoGlobal, audioRefGlobal)
                        return (
                            <li className={styles.uploadedTrackItem}>
                                <Track
                                    coverWidthHeight={coverWidthHeight}
                                    fontSize={fontSize}
                                    coverPath={coverPath}
                                    setTrack={setTrack}
                                    playPause={playPause}
                                    trackDuration={trackDuration}
                                    authorName={userName}
                                    trackName={trackName}
                                    trackPath={trackPath}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <NextStepButton text="Загрузить альбом" action={sendRelease}/>
        </div>
    );
};