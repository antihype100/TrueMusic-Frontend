import React from 'react';
import styles from './SignUp.module.scss';

import { AuthForm } from '../../components/authForm/AuthForm';

const SignUp = () => {
  return (
    <div className={styles.modalWrapper}>
      <AuthForm title='Регистрация' />
    </div>
  );
};

export default SignUp;
