import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.scss';
import { message } from '../../utils/importSvg';
import { LOGIN, REGISTER } from '../../utils/routes';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IAuthFormProps {
  title: string;
}

interface IFormValues {
  email?: string;
  login: string;
  password: string;
  repeatPassword?: string;
}

const AuthForm = ({ title }: IAuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.modalSignUp}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.signUpForm}>
        <h1 className={styles.headerForm}>{title}</h1>

        {title === 'Регистрация' && (
          <div className={styles.inputWrapper}>
            <img src={message} alt='message' />
            <input
              type='text'
              {...register('email', { required: true })}
              placeholder='Почта'
              className={styles.inputForm}
            />
          </div>
        )}
        <div className={styles.inputWrapper}>
          <img src={message} alt='' />
          <input
            type='text'
            {...register('login', { required: true })}
            placeholder='Логин'
            className={styles.inputForm}
          />
        </div>
        <div className={styles.inputWrapper}>
          <img src={message} alt='' />
          <input
            type='text'
            {...register('password', { required: true })}
            placeholder='Пароль'
            className={styles.inputForm}
          />
        </div>
        {title === 'Регистрация' && (
          <div className={styles.inputWrapper}>
            <img src={message} alt='' />
            <input
              type='text'
              {...register('repeatPassword', { required: true })}
              placeholder='Повторите пароль'
              className={styles.inputForm}
            />
          </div>
        )}

        <span className={styles.questionSignUp}>
          {title === 'Регистрация' ? 'У вас уж есть аккаунт?' : 'Еще не зарегистрированы?'}
          <br />
          <Link to={title === 'Регистрация' ? LOGIN : REGISTER}>
            {title === 'Регистрация' ? 'Войти' : 'Зарегистрироваться'}
          </Link>
        </span>

        <button className={styles.signUpButton}>
          {title === 'Регистрация' ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>
    </div>
  );
};

export { AuthForm };
