import { IRelease } from '../../ReleaseDesign/model/ReleaseStore';
import { IFormUploadTrack } from '../ui/UploadTrack';

export const addDataToFormData = (release: IRelease, data: IFormUploadTrack, trackData: FormData, trackFile: File, userName: string) => {
    trackData.set('authorName', userName);
    trackData.set('albumName', release.albumName);
    trackData.set('descriptionAlbum', release.descriptionAlbum);
    trackData.set('genreAlbum', release.genre);
    trackData.set('formatReleaseAlbum', release.formatRelease);
    trackData.append('trackText', `${data.trackText}`);
    trackData.append('trackDescription', `${data.descriptionTrack}`);
    trackData.append('trackProduction', `${data.production}`);
    trackData.append('trackFiles', trackFile, `${data.trackName}.mp3`);
    trackData.forEach(el => console.log(el));
};