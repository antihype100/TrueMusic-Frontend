import styles from './searchPanel.module.scss';
import { stick, search } from '../../utils/importSvg';

const SearchPanel = () => (
  <div className={styles.searchPanelWrapper}>
    <img className={styles.stickIcon} src={stick} alt='' />
    <img className={styles.searchIcon} src={search} alt='' />
    <span className={styles.searchHistory}>История поиска</span>
    <input className={styles.searchPanel} type='text' placeholder='Трек, исполнитель или альбом' />
  </div>
);

export { SearchPanel };
