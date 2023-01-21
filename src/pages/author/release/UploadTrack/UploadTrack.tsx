import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../ReleaseDesign/ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../components/searchPanel/SearchPanel';
import Player from '../../../../components/player/Player';
import ModalLayout from '../../../../components/layouts/modalLayout/ModalLayout';
import { useReleaseStore } from '../../../../store/ReleaseStore';
import axios from '../../../../utils/axios';

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
    const { release } = useReleaseStore((state) => state);
    const [trackName, setTrackName] = useState(null);
    const [trackFile, setTrackFile] = useState<any>(null);
    const [trackNumber, setTrackNumber] = useState(1);



    const [trackData] = useState(new FormData());

    const sendData = () => {
        trackData.forEach(el => console.log(el))
        axios.post('/track/upload', trackData, {
            headers: {
                'content-type': 'multipart/form-data; charset=UTF-8',
            },
        });
    };

    const onSubmit: SubmitHandler<IFormUploadTrack> = (data) => {
        if (release) {
            setTrackName(null);
            setTrackNumber(trackNumber + 1);
            trackData.set('albumName', release.albumName)
            trackData.append('trackText', `${data.trackText}`);
            trackData.append('trackDescription', `${data.descriptionTrack}`);
            trackData.append('trackProduction', `${data.production}`);
            trackData.append('trackFiles', trackFile, `${data.trackName}.mp3`);
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
                                <span>{trackName ? trackName : 'Выберите трек'}</span>
                                <input type='file' ref={audioRef}
                                       onChange={(e: any) => {
                                           setTrackFile(e.target.files[0]);
                                           setTrackName(e.target.files[0].name)
                                       }}
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
