import styles from './ReactHookFormSelectInput.module.scss'
import React from 'react';

interface IControlSelectInput {
    register: Function
    placeholder: string,
    inputName: string
    options: string[]
}

export const ReactHookFormSelectInput = ({register, inputName, options, placeholder}: IControlSelectInput) => {
    return (
        <div className={styles.selectBlock}>
            <label className={styles.arrowIcon}>
                <select {...register(inputName)} className={styles.selectInput}>
                    <option>{placeholder}</option>
                    {options.map((option, i) => (
                        <option key={i} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}