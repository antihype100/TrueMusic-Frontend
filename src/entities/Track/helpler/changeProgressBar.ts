import { RefObject } from 'react';
import { IGlobalTrackInfo } from '../../../widgets/Player/model/globalTrackStore';

export const changeProgressBar = (
    authorName: string,
    trackInfoGlobal: IGlobalTrackInfo,
    trackName: string,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,

) => (e: any) => {
        if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
            if (audioRefGlobal !== null && audioRefGlobal.current) {
                audioRefGlobal.current.currentTime = e.target.value
            }
        }
    }