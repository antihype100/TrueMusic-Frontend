import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './UploadTrackForm.module.scss';
import { useReleaseStore } from '../../../processes/release/CreateRelease/model/ReleaseStore';
import { useUserInfoStore } from '../../../entities/User/model/UserInfoStore';
import { UploadFileButton } from '../../../shared/ui/UploadFileButton/UploadFileButton';
import { addDataToFormData } from '../helper/submitForm';
import { ReactHookFormInput } from '../../../shared/ui/ReactHookFormInput/ReactHookFormInput';
import { message } from '../../../shared/helper/importSvg';
import type { IFormUploadTrack } from '../model/types';
import { NextStepButton } from '../../../shared/ui/NextStepButton/NextStepButton';
import { UploadedTrackList } from '../../../features/UploadedTrackList';

export const UploadTrackForm = () => {

    const { register, handleSubmit, formState: { isValid}, reset} = useForm<IFormUploadTrack>();

    const { release } = useReleaseStore((state) => state);
    const { userName } = useUserInfoStore(state => state);

    const [trackFile, setTrackFile] = useState<File>({} as File);
    const [trackList] = useState<JSX.Element[]>([])
    const [trackNumber, setTrackNumber] = useState(1);
    const [trackData] = useState(new FormData());

    const onSubmit: SubmitHandler<IFormUploadTrack> = (data) => {
        if (trackFile.name) {
            const url = URL.createObjectURL(trackFile);
            const audio = new Audio(url)
            audio.play()
        }
        setTrackFile({} as File)
        reset()
        addDataToFormData(release, data, trackData, trackFile, userName);
    };
    console.log(trackList);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.uploadForm}>
            <h1 className={styles.titleForm}>Загрузка трека №{trackNumber}</h1>
            <UploadedTrackList
                albumName={release.albumName}
                trackList={trackList}

            />
            <div className={styles.uploadFormInnerWrapper}>
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder={'Название трека'}
                    inputName={'trackName'}
                />
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder={'Описание трека'}
                    inputName={'descriptionTrack'}
                />
                <textarea
                    {...register('trackText', { required: true })}
                    className={styles.formInputTextArea}
                    placeholder={'Текст'}
                    rows={5}
                />
                <UploadFileButton
                    fileName={trackFile.name}
                    placeholder={'Выберите трек'}
                    setFile={setTrackFile}
                />
                <NextStepButton
                    text={'Добавить еще песню'}
                    action={() => setTrackNumber(trackNumber + 1)}
                    isValid={isValid && Boolean(trackFile.name)}
                />
            </div>
        </form>
    );
};