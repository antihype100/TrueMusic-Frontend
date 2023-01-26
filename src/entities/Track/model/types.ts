export interface ITrackProps {
    trackPosition?: number;
    authorName: string;
    trackName: string;
    textColor?: string;
    trackPath?: string
    trackDuration?: number
}

export interface ILeftContent {
    authorName: string,
    trackName: string,
    textColor?: string;
    currentTime: number
}

export interface IRightContent {
    duration: number,
    textColor?: string
}