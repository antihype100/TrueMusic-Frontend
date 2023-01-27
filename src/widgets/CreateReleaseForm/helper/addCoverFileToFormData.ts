import { IFormReleaseAlbum } from '../model/types';
import { IRelease } from '../../../processes/release/CreateRelease/model/ReleaseStore';

export const addCoverFileToFormData = (
    coverFile: File,
    coverData: FormData,
    userName: string,
    data: IFormReleaseAlbum,
    setRelease: (release: IRelease) => void
) => {
    const fileExtension = coverFile.name.split('.').pop();
    coverData.set('authorName', userName);
    coverData.append('coverFile', coverFile, `${data.albumName}.${fileExtension}`);
    const url = URL.createObjectURL(coverFile);
    setRelease({ ...data, coverData, coverPath: url});
}