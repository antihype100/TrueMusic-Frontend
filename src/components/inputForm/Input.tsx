import React from 'react';
import { UseFormReturn } from 'react-hook-form/dist/types/form';
import styles from '../../pages/author/release/ReleaseDesign/ReleaseDesign.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { ParseTextarea } from './TextArea';

type UploadFormName = 'nameTrack' | 'aboutTrack' | 'musician' | 'text' | 'cover' | 'track';
type ReleaseFormName = 'title' | 'format' | 'genre' | 'about' | 'copyright' | 'totalTracks';

interface IInputProps extends UseFormReturn {
  inputName: UploadFormName | ReleaseFormName;
  placeholder: string;
  errorText?: string | boolean;
  error: string;
  textarea?: boolean;
}

interface InputForm {
  inputName: UploadFormName | ReleaseFormName;
  placeholder: string;
  errorText?: string | boolean;
  error: string;
  textarea?: boolean;
}

const Input = React.memo((props: IInputProps) => {
  const { register, control, inputName, placeholder, errorText, error, textarea } = props;

  return (
    <div className={styles.inputCover}>
      {textarea ? (
        <Controller
          name={inputName}
          render={({ field }) => <ParseTextarea onChange={field.onChange} />}
          control={control}
        />
      ) : (
        <input
          type='text'
          {...register(inputName!, { required: errorText })}
          className={styles.formInput}
          placeholder={placeholder}
        />
      )}
      {error && <span className={styles.inputError}>{error || 'Произошла ошибка'}</span>}
    </div>
  );
});

const NestedInputContainer = (props: InputForm) => {
  const methods = useFormContext();

  return <Input {...props} {...methods} />;
};

export default NestedInputContainer;
