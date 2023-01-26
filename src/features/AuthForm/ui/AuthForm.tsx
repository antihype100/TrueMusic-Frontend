import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';
import { useUserInfoStore } from '../../../entities/User';
import { registerPost } from '../api/register';
import { loginPost } from '../api/login';
import { LOGIN, REGISTER } from '../../../shared/helper/routes';
import { ReactHookFormInput } from '../../../shared/ui/ReactHookFormInput/ReactHookFormInput';
import { NextStepButton } from '../../../shared/ui/NextStepButton/NextStepButton';
import type { IAuthFormProps, IAuthFormValues } from '../model/types';
import { message } from '../../../shared/helper/importSvg';


export const AuthForm = ({ title }: IAuthFormProps) => {
    const { setAuth, setRole, setUserName } = useUserInfoStore((state) => state);
    const { register, handleSubmit, formState: { isValid } } = useForm<IAuthFormValues>();

    const onSubmit: SubmitHandler<IAuthFormValues> = (data) => {
        if (title === 'Регистрация') {
            registerPost(data, setAuth, setRole, setUserName);
        }
        if (title === 'Вход') {
            loginPost(data, setAuth, setRole, setUserName);
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
            <NextStepButton
                isValid={isValid}
                text={title === 'Регистрация' ? 'Зарегистрироваться' : 'Войти'}
                action={() => {
                }}
            />
        </form>
    );
};
