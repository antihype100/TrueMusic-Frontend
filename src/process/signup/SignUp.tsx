import React from 'react';
import styles from './SignUp.module.scss';
import ModalLayout from '../../app/layouts/modalLayout/ModalLayout';
import Player from '../../widgets/Player/Player';
import { SearchPanel } from '../../widgets/SearchPanel/SearchPanel';

import { AuthForm } from '../../features/AuthForm/AuthForm';

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
