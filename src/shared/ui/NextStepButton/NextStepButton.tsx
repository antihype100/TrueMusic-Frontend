import styles from './NextStepButton.module.scss'
import React from 'react';

interface INextStepButton {
    text: string,
    isValid?: boolean,
    action: Function
}

export const NextStepButton = ({isValid = true, text, action}: INextStepButton) => {
    return (
        <button
            type='submit'
            disabled={!isValid}
            onClick={() => action()}
            className={styles.formButton}
        >
            {text}
        </button>
    )
}