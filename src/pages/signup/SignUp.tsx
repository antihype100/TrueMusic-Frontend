import React from 'react';
import styles from './SignUp.module.scss'
import ModalLayout from "../../components/layouts/modalLayout/ModalLayout";
import Player from "../../components/player/Player";
import { SearchPanel } from "../../components/searchPanel/SearchPanel";
import { message } from "../../utils/importSvg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <ModalLayout>
        <div className={styles.modalWrapper}>
          <SearchPanel/>
          <div className={styles.modalSignUp}>
            <form action="" className={styles.signUpForm}>
              <h1 className={styles.headerForm}>Регистрация</h1>
              <div className={styles.inputWrapper}>
                <img src={message} alt=""/>
                <input className={styles.inputForm} type="text" placeholder='Почта'/>
              </div>
              <div className={styles.inputWrapper}>
                <img src={message} alt=""/>
                <input className={styles.inputForm} type="text" placeholder='Логин'/>
              </div>
              <div className={styles.inputWrapper}>
                <img src={message} alt=""/>
                <input className={styles.inputForm} type="text" placeholder='Пароль'/>
              </div>
              <div className={styles.inputWrapper}>
                <img src={message} alt=""/>
                <input className={styles.inputForm} type="text" placeholder='Повторите пароль'/>
              </div>

              <span className={styles.questionSignUp}>У вас уже есть аккаунт?<Link to={'#'}>Войти</Link></span>

              <button className={styles.signUpButton}>Зарегистрироваться</button>

            </form>
          </div>
          <Player/>
        </div>
    </ModalLayout>
  );
};

export default SignUp;
