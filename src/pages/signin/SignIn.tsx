import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.scss';
import ModalLayout from '../../components/layouts/modalLayout/ModalLayout';
import Player from '../../components/player/Player';
import { SearchPanel } from '../../components/searchPanel/SearchPanel';
import { AuthForm } from '../../components/authForm/AuthForm';
import { useUserInfoStore } from '../../store/UserInfoStore';
import { HOME } from '../../utils/routes';

const SignIn = () => {
  const isAuth = useUserInfoStore((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate(HOME);
    }
  }, [isAuth]);

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
