import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.scss';
import ModalLayout from '../../app/layouts/modalLayout/ModalLayout';
import Player from '../../widgets/Player/Player';
import { SearchPanel } from '../../widgets/SearchPanel/SearchPanel';
import { AuthForm } from '../../features/AuthForm/AuthForm';
import { useUserInfoStore } from '../../entities/User/model/UserInfoStore';
import { HOME } from '../../shared/utils/routes';

const SignIn = () => {
  const { auth } = useUserInfoStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate(HOME);
    }
  }, [auth]);

  return (
    <ModalLayout>
      <div className={styles.modalWrapper}>
        <SearchPanel />
        <AuthForm title="Вход" />
        <Player />
      </div>
    </ModalLayout>
  );
};

export default SignIn;
