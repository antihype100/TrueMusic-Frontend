import React, { useRef, useState } from 'react';
import ModalLayout from '../../../../components/layouts/modalLayout/ModalLayout';
import styles from './ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../components/searchPanel/SearchPanel';
import Player from '../../../../components/player/Player';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useReleaseStore } from '../../../../store/ReleaseStore';
import { useUserInfoStore } from '../../../../store/UserInfoStore';

const formatRelease = [
    { format: 'Album' },
    { format: 'Single' },
    { format: 'Remixes' },
    { format: 'EP' },
    { format: 'Compilation' },
    { format: 'Mixtape' },
    { format: 'Soundtrack' },
    { format: 'Live' },
    { format: 'Bootleg' },
    { format: 'Promo' },
    { format: 'Vinyl' },
    { format: 'WEB' },
    { format: 'Tribute' },
    { format: 'Demo' },
];

interface IFormReleaseAlbum {
    albumName: string;
    descriptionAlbum: string;
    genre: string;
    formatRelease: string;
    coverPath: string;
}

const ReleaseDesign = () => {
    const {
        register,
        handleSubmit,
    } = useForm<IFormReleaseAlbum>();

    const navigate = useNavigate();
    const { setRelease } = useReleaseStore((state) => state);
    const {userName} = useUserInfoStore(state => state)
    const imgRef = useRef<HTMLInputElement>(null);
    const [coverName, setCoverName] = useState<any>(null);
    const [coverFile, setCoverFile] = useState<any>(null)
    const [coverData] = useState(new FormData());


    const name = 'dora';
    const methods = useForm<IFormReleaseAlbum>({ mode: 'onBlur' });

    const setCover = (e: any) => {
        setCoverName(e.target.files[0].name)
        setCoverFile(e.target.files[0])

    };

    const onSubmit: SubmitHandler<IFormReleaseAlbum> = (data) => {
        console.log(data);
        const fileExtension = coverName.split('.').pop()
        coverData.set('authorName', userName)
        coverData.append('coverFile', coverFile, `${data.albumName}.${fileExtension}`)
        coverData.forEach((el: any) => console.log(el))
        setRelease({ ...data, coverFile: coverData });
    };

    return (
        <ModalLayout>
            <div className={styles.modalWrapper}>
                <SearchPanel />
                <div className={styles.modalRelease}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.releaseForm}>
                        <h1 className={styles.titleForm}>Оформление релиза</h1>
                        <div className={styles.form}>
                            <div className={styles.selectBlock}>
                                <label className={styles.arrow}>
                                    <select {...methods.register('formatRelease')} className={styles.select}>
                                        {formatRelease.map(({ format }, i) => (
                                            <option key={i} value={format}>
                                                {format}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <div className={styles.selectBlock}>
                                <label className={styles.arrow}>
                                    <select {...methods.register('genre')} className={styles.select}>
                                        <option defaultValue='Option 1'>Option 1</option>
                                        <option value='Option 2'>Option 2</option>
                                        <option value='Option 3'>Option 3</option>
                                    </select>
                                </label>
                            </div>
                            <input
                                type='text'
                                {...register('albumName', { required: true })}
                                className={styles.formInput}
                                placeholder={'Название альбома'}
                            />
                            <input
                                type='text'
                                {...register('descriptionAlbum', { required: true })}
                                className={styles.formInput}
                                placeholder={'Описание альбома'}
                            />
                            <div className={styles.uploadFile}>
                                <span>{coverName ? coverName : 'Выберите обложку'}</span>
                                <input type='file' ref={imgRef} onChange={(e: any) => setCover(e)} />
                                <button onClick={() => imgRef.current?.click()} type={'button'}>
                                    Выбрать файл
                                </button>
                            </div>


                            <button
                                type='submit'
                                disabled={!methods.formState.isValid}
                                onClick={() => setTimeout(() => navigate(`/${name}/upload-track`), 50)}
                                className={styles.formButton}
                            >
                                Далее
                            </button>
                        </div>
                    </form>
                </div>
                <Player />
            </div>
        </ModalLayout>
    );
};

export default ReleaseDesign;
