import styles from '../ui/AuditionCounter.module.scss'

interface IHeadphones {
    isAudition: boolean
}

export const Headphones = ({isAudition}: IHeadphones) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.headphonesIcon}
        width="20"
        height="20"
        viewBox="0 0 23 23"
        strokeWidth="2"
        stroke={isAudition ? "#979797" : 'rgba(86,86,86,0.69)'}
        fill="none"

        strokeLinecap="round"
        strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <rect x="4" y="13" rx="2" width="5" height="7"/>
        <rect x="15" y="13" rx="2" width="5" height="7"/>
        <path d="M4 15v-3a8 8 0 0 1 16 0v3"/>
    </svg>
)
