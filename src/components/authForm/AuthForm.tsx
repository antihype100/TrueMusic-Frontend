import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.scss';
import { message } from '../../utils/importSvg';
import { LOGIN, REGISTER } from '../../utils/routes';

interface IAuthForm {
  title: string;
}

const AuthForm = ({ title }: IAuthForm) => {
  return (
    <div className={styles.modalSignUp}>
      <form action='' className={styles.signUpForm}>
        <h1 className={styles.headerForm}>{title}</h1>

        {title === 'Регистрация' && (
          <div className={styles.inputWrapper}>
            <img src={message} alt='' />
            <input className={styles.inputForm} type='text' placeholder='Почта' />
          </div>
        )}
        <div className={styles.inputWrapper}>
          <img src={message} alt='' />
          <input className={styles.inputForm} type='text' placeholder='Логин' />
        </div>
        <div className={styles.inputWrapper}>
          <img src={message} alt='' />
          <input className={styles.inputForm} type='text' placeholder='Пароль' />
        </div>
        {title === 'Регистрация' && (
          <div className={styles.inputWrapper}>
            <img src={message} alt='' />
            <input className={styles.inputForm} type='text' placeholder='Повторите пароль' />
          </div>
        )}

        <span className={styles.questionSignUp}>
          {title === 'Регистрация' ? 'У вас уж есть аккаунт?' : 'Еще не зарегистрированы?'}
          <br/>
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
