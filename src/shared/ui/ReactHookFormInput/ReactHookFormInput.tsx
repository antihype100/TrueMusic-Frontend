import styles from './ReactHookFormInput.module.scss'
import React from 'react';

interface IControlInput {
    register: Function
    icon: string,
    placeholder: string,
    inputName: string
}

export const ReactHookFormInput = ({register, icon, placeholder, inputName}: IControlInput) => {
    return (
        <div className={styles.inputWrapper}>
            <img className={styles.inputIcon} src={icon} alt='' />
            <input
                type='text'
                {...register(inputName, { required: true })}
                placeholder={placeholder}
                className={styles.inputForm}
            />
        </div>
    )
}