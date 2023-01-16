import React, { ChangeEvent, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../ReleaseDesign/ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../components/searchPanel/SearchPanel';
import Player from '../../../../components/player/Player';
import ModalLayout from '../../../../components/layouts/modalLayout/ModalLayout';
import NestedInputContainer from '../../../../components/inputForm/Input';

export interface IFormUploadTrack {
  nameTrack: string;
  aboutTrack: string;
  musician: string;
  text: string;
  cover: ImageData;
  track: string;
}

const UploadTrack = () => {
  const methods = useForm<IFormUploadTrack>({ mode: 'onBlur' });
  const inputRef = useRef<HTMLInputElement>(null);
  const [picture, setPicture] = useState<File[] | null>([]);

  const onChangePicture = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setPicture([...target.files!, ...picture!]);
  };

  const onSubmit: SubmitHandler<IFormUploadTrack> = (data) => {
    console.log(data);
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
                  inputName={'nameTrack'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Название трека'}
                  error={methods.formState.errors.nameTrack?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  inputName={'aboutTrack'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Описание трека'}
                  error={methods.formState.errors.aboutTrack?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  inputName={'musician'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Композитор'}
                  error={methods.formState.errors.musician?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  textarea={true}
                  inputName={'text'}
                  placeholder={'Текст'}
                  error={methods.formState.errors.text?.message!}
                  styleInput={styles.formInput}
                />
              </FormProvider>
              <div className={styles.uploadFile}>
                <span>Выберите обложку</span>
                <input type='file' ref={inputRef} onChange={onChangePicture} />
                <button onClick={() => inputRef.current?.click()} type={'button'}>
                  Выбрать файл
                </button>
              </div>
              <div className={styles.uploadFile}>
                <span>Выберите трек</span>
                <input type='file' ref={inputRef} onChange={onChangePicture} />
                <button onClick={() => inputRef.current?.click()} type={'button'}>
                  Выбрать файл
                </button>
              </div>
              <button type='submit' className={styles.formButton}>
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
