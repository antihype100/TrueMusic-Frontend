import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useReleaseStore , getFormatOptions } from '@processes/release/CreateRelease';
import { useUserInfoStore } from '@entities/User';
import { NextStepButton } from '@shared/ui/NextStepButton/NextStepButton';
import { UploadFileButton } from '@shared/ui/UploadFileButton/UploadFileButton';
import { ReactHookFormInput } from '@shared/ui/ReactHookFormInput/ReactHookFormInput';
import { ReactHookFormSelectInput } from '@shared/ui/ReactHookFormSelectInput/ReactHookFormSelectInput';
import { message } from '@shared/helper/importSvg';
import styles from './CreateReleaseForm.module.scss';
import type{ IFormReleaseAlbum } from '../../model/types';
import { addCoverFileToFormData } from '../../helper/addCoverFileToFormData';

export const CreateReleaseForm = () => {

    const { register, handleSubmit, formState: { isValid }, } = useForm<IFormReleaseAlbum>();

    const { setRelease } = useReleaseStore((state) => state);
    const { userName } = useUserInfoStore(state => state);

    const [coverFile, setCoverFile] = useState<File>({} as File)
    const [coverData] = useState(new FormData());

    const onSubmit: SubmitHandler<IFormReleaseAlbum> = (data) => {
        addCoverFileToFormData(coverFile, coverData, userName, data, setRelease)
    };

    const formatRelease = getFormatOptions();
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.releaseForm}>
            <h1 className={styles.titleForm}>Оформление релиза</h1>
            <div className={styles.releaseFormInnerWrapper}>
                <ReactHookFormSelectInput
                    register={register}
                    placeholder="Выберите формат релиза"
                    inputName="formatRelease"
                    options={formatRelease}
                />
                <ReactHookFormSelectInput
                    register={register}
                    placeholder="Выберите жанр релиза"
                    inputName="genre"
                    options={formatRelease}
                />
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder="Название альбома"
                    inputName="albumName"
                />
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder="Описание альбома"
                    inputName="descriptionAlbum"
                />
                <UploadFileButton
                    fileName={coverFile.name}
                    placeholder="Выберите обложку"
                    setFile={setCoverFile}
                />
                <NextStepButton
                    text="Далее"
                    action={() => setTimeout(() => navigate(`/${userName}/upload-track`), 50)}
                    isValid={isValid && Boolean(coverFile.name)}
                />
            </div>
        </form>
    );
};