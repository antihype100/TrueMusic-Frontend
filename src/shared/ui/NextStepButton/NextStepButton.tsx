import styles from './NextStepButton.module.scss'

interface INextStepButton {
    text: string,
    isValid?: boolean,
    action: Function;
    width?: boolean
}

export const NextStepButton = ({isValid = true, text, action, width}: INextStepButton) => (
    <button
        type='submit'
        disabled={!isValid}
        onClick={() => action()}
        className={width ? `${styles.formButton} ${styles.width}` : styles.formButton}
    >
        {text}
    </button>
)