import styles from './ReactHookFormInput.module.scss'

interface IControlInput {
    register: Function
    icon: string,
    placeholder: string,
    inputName: string
}

export const ReactHookFormInput = ({register, icon, placeholder, inputName}: IControlInput) => (
        <div className={styles.inputWrapper}>
            <img className={styles.inputIcon} src={icon} alt='' />
            <input
                type='text'
                autoComplete='new-password'
                {...register(inputName, { required: true })}
                placeholder={placeholder}
                className={styles.inputForm}
            />
        </div>
    )