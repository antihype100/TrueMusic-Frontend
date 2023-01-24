import styles from './ProfileDescription.module.scss';
import React from 'react';

export const ProfileDescription = () => {

    return (
        <div className={styles.profileDescriptionWrapper}>
            <h2 className={styles.title}>Описание</h2>
            <p className={styles.profileDescription}>
                Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно вот
                этого вот
                почаще?
            </p>
        </div>
    );
};