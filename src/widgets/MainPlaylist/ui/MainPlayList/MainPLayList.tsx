import {NavMenuTrackList} from '@features/NavMenuTrackList';
import {TrackList} from '@features/TrackList';
import {SearchPanel} from "@features/SearchPanel";
import {useGlobalPlaylistStore} from "@widgets/MainPlaylist/model/useGlobalPlaylistStore";
import {useGlobalTrackStore} from "@widgets/Player/model/globalTrackStore";
import styles from './MainPlaylist.module.scss';

interface IMainPlaylist {
    target: string
}

export const MainPLayList = ({target}: IMainPlaylist) => {
    const {navLinkState} = useGlobalPlaylistStore(state => state)

    return (
        <div className={styles.playlistWrapper}>
            <NavMenuTrackList target={target}/>
            <SearchPanel/>
            <TrackList apiPath={navLinkState.apiPath}/>
        </div>
    )
}