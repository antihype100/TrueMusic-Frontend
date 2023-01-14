import React from 'react';
import styles from './SignIn.module.scss';
import ModalLayout from '../../components/layouts/modalLayout/ModalLayout';
import Player from '../../components/player/Player';
import { SearchPanel } from '../../components/searchPanel/SearchPanel';
import { AuthForm } from '../../components/authForm/AuthForm';

const SignIn = () => {
  return (
    <ModalLayout>
      <div className={styles.modalWrapper}>
        <SearchPanel />
        <AuthForm title='Вход' />
        <Player />
      </div>
    </ModalLayout>
  );
};

export default SignIn;
