import {RefObject} from 'react';
import {IGlobalTrackInfo} from '@widgets/Player/model/playerStore';

export const playPauseWrapper = (
    trackName: string,
    globalTrackInfo: IGlobalTrackInfo,
    authorName: string,
    setTrackInfoGlobal: (trackInfo: IGlobalTrackInfo) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
) => () => {
    if (authorName === globalTrackInfo.authorName && trackName === globalTrackInfo.trackName) {
        if (audioRefGlobal !== null && audioRefGlobal.current) {
            if (!globalTrackInfo.isPlay) {
                audioRefGlobal.current.play();
                setTrackInfoGlobal({...globalTrackInfo, isPlay: true});
            } else {
                audioRefGlobal.current.pause();
                setTrackInfoGlobal({...globalTrackInfo, isPlay: false});
            }
        }
    }
};