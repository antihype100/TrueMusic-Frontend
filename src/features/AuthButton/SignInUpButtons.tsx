import { Link } from 'react-router-dom';
import styles from './SignInUpButtons.module.scss';
import { LOGIN, REGISTER } from '../../shared/utils/routes';
const SignInUpButtons = () => {
  return (
    <div className={styles.authBlock}>
      <Link to={LOGIN} className={styles.signInButton}>
        Sign In
      </Link>
      <Link to={REGISTER} className={styles.signUpButton}>
        Sign Up
      </Link>
    </div>
  );
};

export { SignInUpButtons };
