import styles from './Comments.module.scss';
import Comment from './Comment';
import { useState } from 'react';

const Comments = () => {
  const [value, setValue] = useState<string>();

  return (
    <div className={styles.commentsWrapper}>
      <h2 className={styles.title}>Комментарии</h2>
      <ul className={styles.commentsBody}>
        {Array.from(Array(10).keys()).map((_, i) => (
          <li key={i}>
            <Comment />
            <hr className={styles.hr} />
          </li>
        ))}
      </ul>
      <form className={styles.form}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
          placeholder={'Оставьте коментарий'}
        />
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default Comments;

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#287DFC"
      width={30}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}
