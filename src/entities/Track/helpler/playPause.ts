import {RefObject} from 'react';
import {IGlobalTrackInfo} from '../../../widgets/Player/model/globalTrackStore';

export const playPauseWrapper = (
    trackName: string,
    trackInfoGlobal: IGlobalTrackInfo,
    authorName: string,
    setTrackInfoGlobal: (trackInfo: IGlobalTrackInfo) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
) => () => {
    if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
        if (audioRefGlobal !== null && audioRefGlobal.current) {
            if (!trackInfoGlobal.isPlay) {
                audioRefGlobal.current.play();
                setTrackInfoGlobal({...trackInfoGlobal, isPlay: true});
            } else {
                audioRefGlobal.current.pause();
                setTrackInfoGlobal({...trackInfoGlobal, isPlay: false});
            }
        }
    }
};