import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../ReleaseDesign/ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../widgets/SearchPanel/SearchPanel';
import Player from '../../../../widgets/Player/Player';
import ModalLayout from '../../../../app/layouts/modalLayout/ModalLayout';
import { useReleaseStore } from '../../ReleaseDesign/model/ReleaseStore';
import {sendRelease} from '../api/sendRelease';
import { useUserInfoStore } from '../../../../entities/User/model/UserInfoStore';
import { addDataToFormData } from '../helper/submitForm';

export interface IFormUploadTrack {
    trackName: string;
    descriptionTrack: string;
    production: string;
    trackText: string;
}

const UploadTrack = () => {

    const audioRef = useRef<HTMLInputElement>(null);
    const { release, setTrackFileName, trackFileName } = useReleaseStore((state) => state);
    const {userName} = useUserInfoStore(state => state)
    const [trackFile, setTrackFile] = useState<any>(null);
    const [trackNumber, setTrackNumber] = useState(1);
    const [trackData] = useState(new FormData());
    const [trackList, settrackList] = useState({})
    const { register, handleSubmit} = useForm<IFormUploadTrack>({ mode: 'onChange' });

    const onSubmit: SubmitHandler<IFormUploadTrack> = (data) => {
        setTrackFileName(null);
        setTrackNumber(trackNumber + 1);
        addDataToFormData(release, data, trackData, trackFile, userName)

    };

    const setTrack = (e: any) => {
        setTrackFile(e.target.files[0]);
        setTrackFileName(e.target.files[0].name);
    };


    return (
        <ModalLayout>
            <div className={styles.modalWrapper}>
                <SearchPanel />
                <div className={styles.modalRelease}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.releaseForm}>
                        <div className={styles.uploadedTracksList}>
                            <h1>Альбом albumName</h1>
                            <ul>
                                
                            </ul>
                            <button className={styles.formButton} type='button' onClick={() => sendRelease(trackData, release)}>
                                Загрузить альбом
                            </button>
                        </div>
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
                            <textarea
                                {...register('trackText', { required: true })}
                                className={styles.formInputTextArea}
                                placeholder={'Текст'}
                                cols={30} rows={5}
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

                    </form>
                </div>
                <Player />
            </div>
        </ModalLayout>
    );
};

export default UploadTrack;
