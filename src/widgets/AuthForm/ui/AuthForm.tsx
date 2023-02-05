import {Link} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useUserInfoStore} from '@entities/User';
import {LOGIN, REGISTER} from '@shared/helper/routes';
import {ReactHookFormInput} from '@shared/ui/ReactHookFormInput/ReactHookFormInput';
import {NextStepButton} from '@shared/ui/NextStepButton/NextStepButton';
import {message} from '@shared/helper/importSvg';
import type {IAuthFormProps, IAuthFormValues} from '../model/types';
import {loginPost} from '../api/login';
import {registerPost} from '../api/register';
import styles from './AuthForm.module.scss';


export const AuthForm = ({title}: IAuthFormProps) => {
    const {setAuth, setRole, setUserName, setUserId} = useUserInfoStore((state) => state);
    const {register, handleSubmit, formState: {isValid}} = useForm<IAuthFormValues>();

    const onSubmit: SubmitHandler<IAuthFormValues> = (data) => {
        if (title === 'Регистрация') {
            registerPost(data, setAuth, setRole, setUserName, setUserId);
        }
        if (title === 'Вход') {
            loginPost(data, setAuth, setRole, setUserName, setUserId);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm} autoComplete='off'>
            <h1 className={styles.headerForm}>{title}</h1>
            {title === 'Регистрация' && (
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder="Почта"
                    inputName="email"
                />
            )}
            <ReactHookFormInput
                register={register}
                icon={message}
                placeholder="Логин"
                inputName="userName"
            />
            <ReactHookFormInput
                register={register}
                icon={message}
                placeholder="Пароль"
                inputName="password"
            />
            {title === 'Регистрация' && (
                <ReactHookFormInput
                    register={register}
                    icon={message}
                    placeholder="Повторите пароль"
                    inputName="repeatPassword"
                />
            )}

            <span className={styles.questionSignUp}>
                {title === 'Регистрация' ? 'У вас ужe есть аккаунт?' : 'Еще не зарегистрированы?'}
                <br/>
                <Link to={title === 'Регистрация' ? LOGIN : REGISTER}>
                    {title === 'Регистрация' ? 'Войти' : 'Зарегистрироваться'}
                </Link>
            </span>
            <NextStepButton
                isValid={isValid}
                text={title === 'Регистрация' ? 'Зарегистрироваться' : 'Войти'}
                width={title !== 'Регистрация'}
                action={() => {
                }}
            />
        </form>
    );
};
