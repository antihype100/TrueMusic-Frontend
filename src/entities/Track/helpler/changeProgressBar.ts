import { ITrackInfoGlobal } from '../../../widgets/Player/model/globalTrackStore';
import { RefObject } from 'react';

export const changeProgressBar = (
    authorName: string,
    trackInfoGlobal: ITrackInfoGlobal,
    trackName: string,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,

) => {
    return (e: any) => {
        if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
            if (audioRefGlobal !== null && audioRefGlobal.current) {
                audioRefGlobal.current.currentTime = e.target.value
            }
        }
    }
}