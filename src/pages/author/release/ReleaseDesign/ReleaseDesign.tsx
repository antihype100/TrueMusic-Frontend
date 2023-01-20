import React from 'react';
import ModalLayout from '../../../../components/layouts/modalLayout/ModalLayout';
import styles from './ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../components/searchPanel/SearchPanel';
import Player from '../../../../components/player/Player';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import NestedInputContainer from '../../../../components/inputForm/Input';
import { useNavigate } from 'react-router-dom';
import { useReleaseStore } from "../../../../store/ReleaseStore";

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
  const navigate = useNavigate();
  const { setRelease } = useReleaseStore((state) => state);

  const name = 'dora';
  const methods = useForm<IFormReleaseAlbum>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormReleaseAlbum> = (data) => {
    console.log(data);
    setRelease(data)
  };

  return (
    <ModalLayout>
      <div className={styles.modalWrapper}>
        <SearchPanel />
        <div className={styles.modalRelease}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.releaseForm}>
            <h1 className={styles.titleForm}>Оформление релиза</h1>
            <div className={styles.form}>
              <FormProvider {...methods}>
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
                      <option defaultValue="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                      <option value="Option 3">Option 3</option>
                    </select>
                  </label>
                </div>
                <NestedInputContainer
                  inputName={'albumName'}
                  errorText={'Название альбома'}
                  placeholder={'Название трека'}
                  error={methods.formState.errors.albumName?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  inputName={'descriptionAlbum'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Описание альбома'}
                  error={methods.formState.errors.descriptionAlbum?.message!}
                  styleInput={styles.formInput}
                />
                {/*<NestedInputContainer*/}
                {/*  inputName={'albumName'}*/}
                {/*  errorText={'Поле обязательно к заполнению'}*/}
                {/*  placeholder={'Copyright'}*/}
                {/*  error={methods.formState.errors.albumName?.message!}*/}
                {/*  styleInput={styles.formInput}*/}
                {/*/>*/}
              </FormProvider>
              <button
                type="submit"
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
