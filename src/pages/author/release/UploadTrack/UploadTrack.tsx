import React, { useRef } from 'react';
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
                />
                <NestedInputContainer
                  inputName={'aboutTrack'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Описание трека'}
                  error={methods.formState.errors.aboutTrack?.message!}
                />
                <NestedInputContainer
                  inputName={'musician'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Композитор'}
                  error={methods.formState.errors.musician?.message!}
                />
                <NestedInputContainer
                  textarea={true}
                  inputName={'text'}
                  placeholder={'Текст'}
                  error={methods.formState.errors.text?.message!}
                />
              </FormProvider>
              <label className={styles.uploadFile}>
                <span>Выберите обложку</span>
                <input ref={inputRef} type='file' onChange={(e) => console.log(e.target.name)} />
                <button onClick={() => inputRef.current?.click()} type={'button'}>
                  Выбрать файл
                </button>
              </label>
              <button
                type='submit'
                disabled={!methods.formState.isValid}
                className={styles.formButton}
              >
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
