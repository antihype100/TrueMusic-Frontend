import { useState } from 'react';
import styles from './SearchPanel.module.scss';

export const SearchPanel = () => {
    const [value, setValue] = useState<string>();

    return (
        <div className={styles.searchPanelWrapper}>
            <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Поиск'
                className={styles.searchPanel}
            />
        </div>
    );
};


