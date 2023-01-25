import { IRelease } from '../../../processes/release/CreateRelease/model/ReleaseStore';

export interface ITrackItem {
    trackName: string,
    trackPath: string
    duration: string
}

export interface IUploadedTrackListProps {
    sendRelease: (trackData: FormData, release: IRelease) => void
    albumName: string;
    trackList: ITrackItem[]
}

