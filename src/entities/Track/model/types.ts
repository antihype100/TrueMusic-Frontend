export interface ITrack {
    index?: number;
    authorName: string;
    trackName: string;
    duration: number;
    likes: number;
    audition: number;
    textColor?: string
}

export interface ILeftContent {
    authorName: string,
    trackName: string,
    textColor?: string
}

export interface IRightContent {
    duration: number,
    textColor?: string
}