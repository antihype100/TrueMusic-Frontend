import React, { ClassType } from 'react';
import { UseFormReturn } from 'react-hook-form/dist/types/form';
import { Controller, useFormContext } from 'react-hook-form';
import styles from '../../pages/author/release/ReleaseDesign/ReleaseDesign.module.scss';
import { ParseTextarea } from './TextArea';

type UploadFormValue = 'trackName' | 'descriptionTrack' | 'production' | 'trackText' | 'trackPath';
type ReleaseFormValue = 'albumName' | 'descriptionAlbum' | 'genre' | 'formatRelease' | 'coverPath';
type SignInFormValue = 'email' | 'login' | 'password' | 'repeatPassword';

interface IInputProps extends UseFormReturn {
  inputName: UploadFormValue | ReleaseFormValue | SignInFormValue;
  placeholder: string;
  errorText?: string | boolean;
  error: string;
  textarea?: boolean;
  styleInput: string;
}

interface InputContainer {
  inputName: UploadFormValue | ReleaseFormValue | SignInFormValue;
  placeholder: string;
  errorText?: string | boolean;
  error: string;
  textarea?: boolean;
  styleInput: string;
}

const Input = React.memo((props: IInputProps) => {
  const { register, control, inputName, placeholder, errorText, error, textarea, styleInput } = props;

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
          type="text"
          {...register(inputName!, { required: errorText })}
          className={styleInput}
          placeholder={placeholder}
        />
      )}
      {error && <span className={styles.inputError}>{error || 'Произошла ошибка'}</span>}
    </div>
  );
});

const NestedInputContainer = (props: InputContainer) => {
  const methods = useFormContext();

  return <Input {...props} {...methods} />;
};

export default NestedInputContainer;
