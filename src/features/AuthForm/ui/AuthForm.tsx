import React from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';
import { message } from '../../../shared/helper/importSvg';
import { LOGIN, REGISTER } from '../../../shared/helper/routes';
import { useUserInfoStore } from '../../../entities/User/model/UserInfoStore';
import { ReactHookFormInput } from '../../../shared/ui/ReactHookFormInput/ReactHookFormInput';
import type { IAuthFormProps, IAuthFormValues } from '../model/types';
import { registerPost } from '../api/register';
import { loginPost } from '../api/login';



const AuthForm = ({ title }: IAuthFormProps) => {
    const { setAuth, setRole, setUserName } = useUserInfoStore((state) => state);
    const { register, handleSubmit} = useForm<IAuthFormValues>();

    const onSubmit: SubmitHandler<IAuthFormValues> = (data) => {
        if (title === 'Регистрация') {
            registerPost(data, setAuth, setRole, setUserName)
        }
        if (title === 'Вход') {
            loginPost(data, setAuth, setRole, setUserName)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
            <h1 className={styles.headerForm}>{title}</h1>
            {title === 'Регистрация' && (
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder={'Почта'}
                    inputName={'email'}
                />
            )}
            <ReactHookFormInput
                register={register}
                icon={message}
                placeholder={'Логин'}
                inputName={'userName'}
            />
            <ReactHookFormInput
                register={register}
                icon={message}
                placeholder={'Пароль'}
                inputName={'password'}
            />
            {title === 'Регистрация' && (
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder={'Повторите пароль'}
                    inputName={'repeatPassword'}
                />
            )}

            <span className={styles.questionSignUp}>
          {title === 'Регистрация' ? 'У вас ужe есть аккаунт?' : 'Еще не зарегистрированы?'}
                <br />
          <Link to={title === 'Регистрация' ? LOGIN : REGISTER}>
            {title === 'Регистрация' ? 'Войти' : 'Зарегистрироваться'}
          </Link>
        </span>
            <button className={styles.signUpButton}>{title === 'Регистрация' ? 'Зарегистрироваться' : 'Войти'}</button>
        </form>
    );
};

export { AuthForm };
