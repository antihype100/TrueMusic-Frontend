import React, { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../ReleaseDesign/ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../components/searchPanel/SearchPanel';
import Player from '../../../../components/player/Player';
import ModalLayout from '../../../../components/layouts/modalLayout/ModalLayout';
import { useReleaseStore } from '../../../../store/ReleaseStore';
import axios from '../../../../utils/axios';
import { useUserInfoStore } from '../../../../store/UserInfoStore';

export interface IFormUploadTrack {
    trackName: string;
    descriptionTrack: string;
    production: string;
    trackText: string;
}

const UploadTrack = () => {
    const {
        register,
        handleSubmit,
    } = useForm<IFormUploadTrack>({ mode: 'onChange' });
    const audioRef = useRef<HTMLInputElement>(null);
    const { release, setTrackFileName, trackFileName } = useReleaseStore((state) => state);
    const {userName} = useUserInfoStore(state => state)
    const [trackName, setTrackName] = useState('');
    const [trackFile, setTrackFile] = useState<any>(null);
    const [trackNumber, setTrackNumber] = useState(1);
    const [trackData] = useState(new FormData());

    const setTrack = (e: any) => {
        setTrackFile(e.target.files[0]);
        setTrackFileName(e.target.files[0].name);
    };

    const sendData = async () => {
        await axios.post('/release/upload/tracks', trackData, {
            headers: {
                'content-type': 'multipart/form-data; charset=UTF-8',
            },
        });
        if (release) {
            release.coverFile.forEach((el: any) => console.log(el))
            await axios.post('/release/upload/cover', release.coverFile, {
                headers: {
                    'content-type': 'multipart/form-data; charset=UTF-8',
                },
            });
        }
    };

    const onSubmit: SubmitHandler<IFormUploadTrack> = (data) => {
        if (release) {
            setTrackFileName(null);
            setTrackNumber(trackNumber + 1);
            trackData.set('authorName', userName)
            trackData.set('albumName', release.albumName);
            trackData.set('descriptionAlbum', release.descriptionAlbum);
            trackData.set('genreAlbum', release.genre);
            trackData.set('formatReleaseAlbum', release.formatRelease);
            trackData.append('trackText', `${data.trackText}`);
            trackData.append('trackDescription', `${data.descriptionTrack}`);
            trackData.append('trackProduction', `${data.production}`);
            trackData.append('trackFiles', trackFile, `${data.trackName}.mp3`);
            trackData.forEach(el => console.log(el));
        }
    };


    return (
        <ModalLayout>
            <div className={styles.modalWrapper}>
                <SearchPanel />
                <div className={styles.modalRelease}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.releaseForm}>
                        <h1 className={styles.titleForm}>Загрузка трека №{trackNumber}</h1>
                        <div className={styles.form}>
                            <input
                                type='text'
                                {...register('trackName', { required: true })}
                                className={styles.formInput}
                                placeholder={'Название трека'}
                            />
                            <input
                                type='text'
                                {...register('descriptionTrack', { required: true })}
                                className={styles.formInput}
                                placeholder={'Описание трека'}
                            />
                            <input
                                type='text'
                                {...register('production', { required: true })}
                                className={styles.formInput}
                                placeholder={'Композитор'}
                            />
                            <input
                                type='text'
                                {...register('trackText', { required: true })}
                                className={styles.formInput}
                                placeholder={'Текст'}
                            />
                            <div className={styles.uploadFile}>
                                <span>{trackFileName  ? trackFileName : 'Выберите трек'}</span>
                                <input type='file' ref={audioRef}
                                       onChange={(e: any) => setTrack(e)}
                                />
                                <button onClick={() => audioRef.current?.click()} type={'button'}>
                                    Выбрать файл
                                </button>
                            </div>
                            <button type='submit' className={styles.formButton}>
                                Добавить еще песню
                            </button>


                        </div>
                        <button type='button' onClick={sendData} className={styles.formButton}>
                            Загрузить альбом
                        </button>
                    </form>
                </div>
                <Player />
            </div>
        </ModalLayout>
    );
};

export default UploadTrack;
