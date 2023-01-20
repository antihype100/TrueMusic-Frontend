import React from 'react';
import styles from './SignUp.module.scss';
import ModalLayout from '../../components/layouts/modalLayout/ModalLayout';
import Player from '../../components/player/Player';
import { SearchPanel } from '../../components/searchPanel/SearchPanel';

import { AuthForm } from '../../components/authForm/AuthForm';

const SignUp = () => {
  return (
    <ModalLayout>
      <div className={styles.modalWrapper}>
        <SearchPanel />
        <AuthForm title="Регистрация" />
        <Player />
      </div>
    </ModalLayout>
  );
};

export default SignUp;
