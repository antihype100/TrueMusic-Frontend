import styles from './searchPanel.module.scss';
import { stick, search } from '../../utils/importSvg';
import { useState } from 'react';

const SearchPanel = () => {
  const [value, setValue] = useState<string>();

  return (
    <div className={styles.searchPanelWrapper}>
      <img className={styles.stickIcon} src={stick} alt="" />
      <img className={styles.searchIcon} src={search} alt="" />
      <span className={styles.searchHistory}>История поиска</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Трек, исполнитель или альбом"
        className={styles.searchPanel}
      />
    </div>
  );
};

export { SearchPanel };
