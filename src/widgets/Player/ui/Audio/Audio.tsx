import {memo, useEffect, useRef} from 'react';
import {useGlobalTrackStore} from '../../model/globalTrackStore';
import {baseUrl} from '../../../../shared/api/baseUrl';

interface IAudio {
    trackPath: string;
}

export const Audio = memo(({trackPath}: IAudio) => {
    const audioRef = useRef(null);
    const setRef = useGlobalTrackStore(state => state.setAudioRefGlobal);
    const setCurrentTime = useGlobalTrackStore(state => state.setCurrentTime);
    setRef(audioRef);

    useEffect(() => {
        if (audioRef !== null) {
            // @ts-ignore
            audioRef.current.play();
        }
    });

    const onTimeUpdate = () => {
        // @ts-ignore
        setCurrentTime(audioRef.current.currentTime);
    };

    return (
        <audio
            onTimeUpdate={onTimeUpdate}
            ref={audioRef}
            src={window.location.href.split('/').pop() === 'upload-track'
                ? trackPath
                : `${baseUrl}/track${trackPath}`}
            preload='metadata'/>
    );
});