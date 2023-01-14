import React from 'react';
import ModalLayout from '../../../../components/layouts/modalLayout/ModalLayout';
import styles from './ReleaseDesign.module.scss';
import { SearchPanel } from '../../../../components/searchPanel/SearchPanel';
import Player from '../../../../components/player/Player';
import { SubmitHandler, useForm } from 'react-hook-form';

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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormRelease>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormRelease> = (data) => {
    console.log(data);
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
                  <select {...register('format')} className={styles.select}>
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
                  <select {...register('genre')} className={styles.select}>
                    <option defaultValue='Option 1'>Option 1</option>
                    <option value='Option 2'>Option 2</option>
                    <option value='Option 3'>Option 3</option>
                  </select>
                </label>
              </div>
              <div className={styles.inputCover}>
                <input
                  type='text'
                  {...register('title', { required: 'Поле обязательно к заполнению' })}
                  className={styles.formInput}
                  placeholder={'Название альбома'}
                />
                {errors.title && <span className={styles.inputError}>{errors.title?.message}</span>}
              </div>
              <div className={styles.inputCover}>
                <input
                  type='text'
                  {...register('about', { required: 'Поле обязательно к заполнению' })}
                  className={styles.formInput}
                  placeholder={'Описание альбома'}
                />
                {errors.about && <span className={styles.inputError}>{errors.about?.message}</span>}
              </div>
              <div className={styles.inputCover}>
                <input
                  type='text'
                  {...register('copyright', { required: 'Поле обязательно к заполнению' })}
                  className={styles.formInput}
                  placeholder={'Копирайт'}
                />
                {errors.copyright && (
                  <span className={styles.inputError}>{errors.copyright?.message}</span>
                )}
              </div>
              <div className={styles.inputCover}>
                <input
                  type='text'
                  {...register('totalTracks', { required: 'Поле обязательно к заполнению' })}
                  className={styles.formInput}
                  placeholder={'Количество треков в альбоме'}
                />
                {errors.totalTracks && (
                  <span className={styles.inputError}>{errors.totalTracks?.message}</span>
                )}
              </div>
              <button type='submit' disabled={!isValid} className={styles.formButton}>
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
