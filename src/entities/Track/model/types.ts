import {ReactNode} from "react";

export interface ITrackProps {
    trackPosition?: number;
    authorName: string;
    trackName: string;
    textColor?: string;
    trackPath?: string;
    coverPath?: string;
    trackDuration?: number;
    coverWidthHeight: number;
    fontSize: number,
    playPause?: () => void;
    setTrack?: () => void;
    ProgressBar?: ReactNode;
    LikeCounter?: ReactNode;
    AuditionsCounter?: ReactNode

}

export interface ITrackInfoProps {
    authorName: string;
    trackName: string;
    textColor?: string;

    fontSize: number
}
