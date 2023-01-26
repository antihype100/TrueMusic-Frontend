import { ITrackInfoGlobal } from '../../../widgets/Player/model/globalTrackStore';
import { RefObject } from 'react';

export const playPause = (
    trackName: string,
    trackInfoGlobal: ITrackInfoGlobal,
    authorName: string,
    setTrackInfoGlobal: (trackInfo: ITrackInfoGlobal) => void,
    audioRefGlobal: RefObject<HTMLAudioElement> | null,
) => {
        if (authorName === trackInfoGlobal.authorName && trackName === trackInfoGlobal.trackName) {
            if (audioRefGlobal !== null && audioRefGlobal.current) {
                if (!trackInfoGlobal.isPlay) {
                    console.log(audioRefGlobal, 'play');
                    audioRefGlobal.current.play();
                    setTrackInfoGlobal({ ...trackInfoGlobal, isPlay: true });
                } else {
                    console.log(audioRefGlobal, 'pause');
                    audioRefGlobal.current.pause();
                    setTrackInfoGlobal({ ...trackInfoGlobal, isPlay: false });
                }
            }
        }

};