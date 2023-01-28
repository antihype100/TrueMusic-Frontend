import styles from './UploadedTrackList.module.scss';
import {useUserInfoStore} from '../../../../entities/User';
import {useReleaseStore} from "../../../../processes/release/CreateRelease";
import {useGlobalTrackStore} from "../../../../widgets/Player/model/globalTrackStore";
import {Track} from '../../../../entities/Track';
import {NextStepButton} from '../../../../shared/ui/NextStepButton/NextStepButton';
import {playPauseWrapper} from "../../../../entities/Track/helpler/playPause";
import type {IUploadedTrackListProps} from '../../model/types';


export const UploadedTrackList = ({albumName, trackList, sendRelease}: IUploadedTrackListProps) => {

    const {setTrackInfoGlobal, globalTrackInfo, audioRefGlobal} = useGlobalTrackStore(state => state)
    const {coverPath} = useReleaseStore(state => state.release)
    const {userName} = useUserInfoStore()

    return (
        <div className={styles.uploadedTrackListWrapper}>
            <h2 className={styles.uploadedTrackListHeader}>Альбом {albumName}</h2>
            <div className={styles.wrapperForPaddingScroll}>
                <ul className={styles.uploadedTrackList}>
                    {trackList.map(({trackPath, trackName, trackDuration}) => {
                        const setTrack = () => {}
                        const playPause = playPauseWrapper(trackName, globalTrackInfo, userName, setTrackInfoGlobal, audioRefGlobal)
                        return (
                            <li className={styles.uploadedTrackItem}>
                                <Track
                                    coverWidthHeight={15}
                                    fontSize={15}
                                    coverPath={coverPath}
                                    setTrack={setTrack}
                                    playPause={playPause}
                                    trackDuration={trackDuration}
                                    authorName={userName}
                                    trackName={trackName}
                                    trackPath={trackPath}
                                    textColor="black"
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