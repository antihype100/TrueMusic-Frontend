import { IRelease } from '@processes/release/CreateRelease/model/ReleaseStore';
import type { IFormUploadTrack } from '@processes/release/UploadTrack/model/types';
import { ITrackItem } from '@features/UploadedTrackList';

export const addDataToFormData = (
    release: IRelease,
    data: IFormUploadTrack,
    trackData: FormData,
    uploadTrackFile: File,
    userName: string,
    trackList: ITrackItem[],
    trackDuration: number,
    setUploadTrackFile: (uploadTrackFile:File) => void,
    reset: any,
    id: number
) => {
    const url = URL.createObjectURL(uploadTrackFile);

    trackData.set('authorName', userName);
    trackData.set('albumName', release.albumName);
    trackData.set('albumDescription', release.descriptionAlbum);
    trackData.set('albumGenre', release.genre);
    trackData.set('albumFormatRelease', release.formatRelease);
    trackData.append('trackText', data.trackText);
    trackData.append('trackDescription', data.descriptionTrack);
    trackData.append('trackProduction', data.production);
    trackData.append('trackName', data.trackName)
    trackData.append('trackFiles', uploadTrackFile, data.trackName);

    trackList.push({trackName: data.trackName, trackPath: url, trackDuration, id})
    setUploadTrackFile({} as File)
    reset()

};