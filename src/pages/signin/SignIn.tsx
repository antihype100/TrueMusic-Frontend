import React from 'react';
import styles from './SignIn.module.scss';
import { AuthForm } from '../../components/authForm/AuthForm';

const SignIn = () => {
  return (
    <div className={styles.modalWrapper}>
      <AuthForm title='Вход' />
    </div>
  );
};

export default SignIn;
