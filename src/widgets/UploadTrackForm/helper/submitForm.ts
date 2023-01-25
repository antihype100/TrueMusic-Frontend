import { IRelease } from '../../../processes/release/CreateRelease/model/ReleaseStore';
import type { IFormUploadTrack } from '../../../processes/release/UploadTrack/model/types';

export const addDataToFormData = (release: IRelease, data: IFormUploadTrack, trackData: FormData, trackFile: File, userName: string) => {
    trackData.set('authorName', userName);
    trackData.set('albumName', release.albumName);
    trackData.set('descriptionAlbum', release.descriptionAlbum);
    trackData.set('genreAlbum', release.genre);
    trackData.set('formatReleaseAlbum', release.formatRelease);
    trackData.append('trackText', data.trackText);
    trackData.append('trackDescription', data.descriptionTrack);
    trackData.append('trackProduction', data.production);
    trackData.append('trackName', data.trackName)
    trackData.append('trackFiles', trackFile, data.trackName);

    const url = URL.createObjectURL(trackFile);


    return {
        trackName: data.trackName,
        trackPath: url
    }
};