import {memo, useEffect, useRef} from 'react';
import {useGlobalTrackStore} from '../../model/globalTrackStore';
import {BASE_URL} from "../../../../../config";
import {nextTrackWrapper} from "../../helper/trackController";
import {getPlayingTrackIndex} from "../../helper/getPlayingTrackIndex";

interface IAudio {
    trackPath: string;
}

export const Audio = memo(({trackPath}: IAudio) => {
    const audioRef = useRef(null);
    const setRef = useGlobalTrackStore(state => state.setAudioRefGlobal);
    const setCurrentTime = useGlobalTrackStore(state => state.setCurrentTime);
    const globalTrackInfo = useGlobalTrackStore(state => state.globalTrackInfo)
    const globalTrackList = useGlobalTrackStore(state => state.globalTrackList)
    const setTrackInfoGlobal = useGlobalTrackStore(state => state.setTrackInfoGlobal)

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