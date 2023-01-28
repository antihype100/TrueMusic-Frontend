import styles from '../ui/AuditionsCounter.module.scss'

export const Headphones = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.headphonesIcon}
        width="20"
        height="20"
        viewBox="0 0 23 23"
        strokeWidth="1.5"
        stroke="#979797"
        fill="none"

        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="13" rx="2" width="5" height="7"/>
        <rect x="15" y="13" rx="2" width="5" height="7"/>
        <path d="M4 15v-3a8 8 0 0 1 16 0v3"/>
    </svg>
)
