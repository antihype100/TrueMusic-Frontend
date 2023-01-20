import React, { useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import styles from '../ReleaseDesign/ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../components/searchPanel/SearchPanel';
import Player from '../../../../components/player/Player';
import ModalLayout from '../../../../components/layouts/modalLayout/ModalLayout';
import NestedInputContainer from '../../../../components/inputForm/Input';
import { useReleaseStore } from "../../../../store/ReleaseStore";
import axios from "../../../../utils/axios";

export interface IFormUploadTrack {
  trackName: string;
  descriptionTrack: string;
  production: string;
  trackText: string;
  trackPath: string;
  coverPath: string;
}

const UploadTrack = () => {
  const methods = useForm<IFormUploadTrack>({ mode: 'onBlur' });
  const imgRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLInputElement>(null);
  const { release } = useReleaseStore((state) => state);

  const [fields, setFields] = useState({
    image: '',
    audio: ''
  })

  const onChangeFile = async (e: any, type: string) => {
    try {
      const formData = new FormData()
      const file = e.target.files[0]
      formData.append('trackFiles', file)
      await axios.post('/upload', formData)
        .then(({data}) => {
          type === 'image'
            ? setFields({...fields, image: data.url})
            : setFields({...fields, audio: data.url})
        })
    } catch (err) {
      console.warn(err)
    }
  }

  const onSubmit: SubmitHandler<IFormUploadTrack> = async (data) => {
    await axios.post('/album/create', release).then(({ data }) => console.log(data))
    const res = await axios.post('/track/create', { ...data, trackPath: fields.audio, coverPath: fields.image })
    console.log(res);
    setFields({
      audio: '',
      image: ''
    })
    methods.reset()
  };

  return (
    <ModalLayout>
      <div className={styles.modalWrapper}>
        <SearchPanel />
        <div className={styles.modalRelease}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.releaseForm}>
            <h1 className={styles.titleForm}>Загрузка трека №1</h1>
            <div className={styles.form}>
              <FormProvider {...methods}>
                <NestedInputContainer
                  inputName={'trackName'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Название трека'}
                  error={methods.formState.errors.trackName?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  inputName={'descriptionTrack'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Описание трека'}
                  error={methods.formState.errors.descriptionTrack?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  inputName={'production'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Композитор'}
                  error={methods.formState.errors.production?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  textarea={true}
                  inputName={'trackText'}
                  placeholder={'Текст'}
                  error={methods.formState.errors.trackText?.message!}
                  styleInput={styles.formInput}
                />
              </FormProvider>
              <div className={styles.uploadFile}>
                <span>Выберите обложку</span>
                <input type="file" ref={imgRef} onChange={(e) => onChangeFile(e, 'image')} />
                <button onClick={() => imgRef.current?.click()} type={'button'}>
                  Выбрать файл
                </button>
              </div>
              <div className={styles.uploadFile}>
                <span>Выберите трек</span>
                <input type="file" ref={audioRef} onChange={(e) => onChangeFile(e, 'audio')} />
                <button onClick={() => audioRef.current?.click()} type={'button'}>
                  Выбрать файл
                </button>
              </div>
              <button type="submit" className={styles.formButton}>
                Загрузить
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
