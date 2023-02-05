import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useReleaseStore } from '@processes/release/CreateRelease';
import { useUserInfoStore } from '@entities/User';
import { UploadedTrackList } from '@features/UploadedTrackList';
import { UploadFileButton } from '@shared/ui/UploadFileButton/UploadFileButton';
import { ReactHookFormInput } from '@shared/ui/ReactHookFormInput/ReactHookFormInput';
import { NextStepButton } from '@shared/ui/NextStepButton/NextStepButton';
import type { ITrackItem } from '@features/UploadedTrackList';
import { message } from '@shared/helper/importSvg';
import {useNavigate} from "react-router-dom";
import { sendRelease } from '../../api/sendRelease';
import { addDataToFormData } from '../../helper/addDataToFormData';
import { addTrackDurationToFormData } from '../../helper/addTrackDurationToFormData';
import type { IFormUploadTrack } from '../../model/types';
import styles from './UploadTrackForm.module.scss';

export const UploadTrackForm = () => {
    const navigate = useNavigate()
    const [uploadTrackFile, setUploadTrackFile] = useState<File>({} as File);
    const [uploadTrackList] = useState<ITrackItem[]>([])
    const [trackNumber, setTrackNumber] = useState(1);
    const [trackData] = useState(new FormData());
    const [trackDuration, setTrackDuration] = useState(0)

    const { register, handleSubmit, formState: { isValid}, reset} = useForm<IFormUploadTrack>();

    const { release } = useReleaseStore((state) => state);
    const { userName } = useUserInfoStore(state => state);

    useEffect(() => {
        addTrackDurationToFormData(uploadTrackFile, setTrackDuration, trackData)
    }, [uploadTrackFile]);

    const onSubmit: SubmitHandler<IFormUploadTrack> = (data) => {
        addDataToFormData(release, data, trackData,uploadTrackFile,
            userName, uploadTrackList, trackDuration, setUploadTrackFile, reset, trackNumber);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.uploadForm}>
            <h1 className={styles.titleForm}>Загрузка трека №{trackNumber}</h1>
            <UploadedTrackList
                albumName={release.albumName}
                trackList={uploadTrackList}
                sendRelease={() => sendRelease(trackData, release, navigate)}
            />
            <div className={styles.uploadFormInnerWrapper}>
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder="Название трека"
                    inputName="trackName"
                />
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder="Описание трека"
                    inputName="descriptionTrack"
                />
                <textarea
                    {...register('trackText', { required: true })}
                    className={styles.formInputTextArea}
                    placeholder="Текст"
                    rows={5}
                />
                <UploadFileButton
                    fileName={uploadTrackFile.name}
                    placeholder="Выберите трек"
                    setFile={setUploadTrackFile}
                />
                <NextStepButton
                    text="Добавить еще песню"
                    action={() => setTrackNumber(trackNumber + 1)}
                    isValid={isValid && Boolean(uploadTrackFile.name)}
                />
            </div>
        </form>
    );
};