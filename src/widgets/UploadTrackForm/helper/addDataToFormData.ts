import { IRelease } from '../../../processes/release/CreateRelease/model/ReleaseStore';
import type { IFormUploadTrack } from '../../../processes/release/UploadTrack/model/types';
import { ITrackItem } from '../../../features/UploadedTrackList';

export const addDataToFormData = (
    release: IRelease,
    data: IFormUploadTrack,
    trackData: FormData,
    uploadTrackFile: File,
    userName: string,
    trackList: ITrackItem[],
    trackDuration: number,
    setUploadTrackFile: (uploadTrackFile:File) => void,
    reset: any
) => {
    const url = URL.createObjectURL(uploadTrackFile);

    trackData.set('authorName', userName);
    trackData.set('albumName', release.albumName);
    trackData.set('descriptionAlbum', release.descriptionAlbum);
    trackData.set('genreAlbum', release.genre);
    trackData.set('formatReleaseAlbum', release.formatRelease);
    trackData.append('trackText', data.trackText);
    trackData.append('trackDescription', data.descriptionTrack);
    trackData.append('trackProduction', data.production);
    trackData.append('trackName', data.trackName)
    trackData.append('trackFiles', uploadTrackFile, data.trackName);

    trackList.push({trackName: data.trackName, trackPath: url, trackDuration: trackDuration})
    setUploadTrackFile({} as File)
    reset()

};