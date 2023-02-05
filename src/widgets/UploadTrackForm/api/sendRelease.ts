import axios from '@shared/api/axios';
import type { IRelease } from '@processes/release/CreateRelease/model/ReleaseStore';
import {HOME} from "@shared/helper/routes";

export const sendRelease = async (trackData: FormData, release: IRelease, navigate: Function) => {

    await axios.post('/release/upload/tracks', trackData, {
        headers: {
            'content-type': 'multipart/form-data; charset=UTF-8',
        },
    });
    if (release) {
        await axios.post('/release/upload/cover', release.coverData, {
            headers: {
                'content-type': 'multipart/form-data; charset=UTF-8',
            },
        });
    }
    navigate(HOME)

};