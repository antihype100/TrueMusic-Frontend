import axios from '../../../../shared/helper/axios';
import type { IRelease } from '../../ReleaseDesign/model/ReleaseStore';

export const sendRelease = async (trackData: FormData, release: IRelease) => {
    await axios.post('/release/upload/tracks', trackData, {
        headers: {
            'content-type': 'multipart/form-data; charset=UTF-8',
        },
    });
    if (release) {
        await axios.post('/release/upload/cover', release.coverFile, {
            headers: {
                'content-type': 'multipart/form-data; charset=UTF-8',
            },
        });
    }
};