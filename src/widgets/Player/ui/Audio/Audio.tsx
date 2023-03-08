import {memo, useEffect, useRef} from 'react';
import {usePlayerStore} from '../../model/playerStore';
import {nextTrackWrapper} from "../../helper/trackController";
import {getPlayingTrackIndex} from "../../helper/getPlayingTrackIndex";

interface IAudio {
    trackPath: string;
}

export const Audio = memo(({trackPath}: IAudio) => {
    const audioRef = useRef(null);
    const setRef = usePlayerStore(state => state.setAudioRefGlobal);
    const setCurrentTime = usePlayerStore(state => state.setCurrentTime);
    const globalTrackInfo = usePlayerStore(state => state.globalTrackInfo)
    const globalTrackList = usePlayerStore(state => state.globalTrackList)
    const setTrackInfoGlobal = usePlayerStore(state => state.setTrackInfoGlobal)

    const playingTrackIdx = getPlayingTrackIndex(globalTrackList, globalTrackInfo)
    const nextTrack = nextTrackWrapper(setCurrentTime, playingTrackIdx, globalTrackList, setTrackInfoGlobal)
    setRef(audioRef);

    useEffect(() => {
        if (audioRef !== null && globalTrackInfo.isPlay) {
            // @ts-ignore
            audioRef.current.play();
        }
    }, [trackPath]);

    const onTimeUpdate = () => {
        // @ts-ignore
        setCurrentTime(audioRef.current.currentTime);
    };

    const BASE_URL = import.meta.env.VITE_BASE_URL

    return (
        <audio
            onTimeUpdate={onTimeUpdate}
            onEnded={nextTrack}
            ref={audioRef}
            src={window.location.href.split('/').pop() === 'upload-track'
                ? trackPath
                : `${BASE_URL}/track${trackPath}`}
            preload='metadata'/>
    );
});