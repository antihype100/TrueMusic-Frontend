import React from 'react';
import ModalLayout from '../../../../components/layouts/modalLayout/ModalLayout';
import styles from './ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../components/searchPanel/SearchPanel';
import Player from '../../../../components/player/Player';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import NestedInputContainer from '../../../../components/inputForm/Input';
import { useNavigate } from 'react-router-dom';

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
  { format: 'Demo' }
];

interface IFormRelease {
  title: string;
  format: string;
  genre: string;
  about: string;
  copyright: string;
  totalTracks?: number;
}

const ReleaseDesign = () => {
  const navigate = useNavigate();
  const name = 'dora';
  const methods = useForm<IFormRelease>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormRelease> = (data) => {
    console.log(data);
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
                    <select {...methods.register('format')} className={styles.select}>
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
                <NestedInputContainer
                  inputName={'title'}
                  errorText={'Название альбома'}
                  placeholder={'Название трека'}
                  error={methods.formState.errors.title?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  inputName={'about'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Описание альбома'}
                  error={methods.formState.errors.about?.message!}
                  styleInput={styles.formInput}
                />
                <NestedInputContainer
                  inputName={'copyright'}
                  errorText={'Поле обязательно к заполнению'}
                  placeholder={'Copyright'}
                  error={methods.formState.errors.copyright?.message!}
                  styleInput={styles.formInput}
                />
              </FormProvider>
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
